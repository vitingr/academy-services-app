"use client"

import { UserContextProps, UserProps } from '@/types'
import { useSession } from 'next-auth/react'
import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext<UserContextProps | any>(undefined)

export const UserProvider = ({ children }: {
  children: React.ReactNode
}) => {

  const { data: session, status } = useSession()

  const [data, setData] = useState<UserProps[]>([])

  const getInfo = async () => {
    try {
      const requisition = await fetch(`http://localhost:3030/users/${session?.user?.email}`)
      const response = await requisition.json()

      if (response === "User not found") {

        const fullname = session?.user?.name
        const firstname = fullname?.split(" ")[0]
        const lastname = fullname?.split(" ")[1]

        const createUser = await fetch("http://localhost:3030/users/create", {
          method: "POST",
          body: JSON.stringify({
            Name: fullname,
            FirstName: firstname,
            LastName: lastname,
            Email: session?.user?.email
          })
        })

        if (createUser.ok) {
          getInfo()
        }
        
      } else {
        setData(response)
      }
    } catch (error) {
      console.log(error)
      // throw new Error("Erro! Não foi possível obter as informações do usuário")
    }
  }

  useEffect(() => {
    if (session?.user?.email !== undefined && status === "authenticated") {
      getInfo()
    }
  }, [session])

  return (
    <UserContext.Provider value={{data, setData, getInfo}}>
      {children}
    </UserContext.Provider>
  )
}

export const infoUser = () => useContext(UserContext)