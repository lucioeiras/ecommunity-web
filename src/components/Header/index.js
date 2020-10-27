/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getUserWithId } from '../../firebase/users'

import logo from '../../assets/logo.svg'

import { Container, Profile, Tabs, CTA } from './styles'

export default function Header({ isLanding, tabs, button, user_id }) {
  const [user, setUser] = useState()

  useEffect(() => {
    user_id && getUserWithId(user_id).then(user => setUser(user))
  }, [])

  return (
    <Container>
      {
        isLanding 
          ? <img src={logo} alt="E-Community" />
          : (
            user && (
              <Profile>
                <img src={user.avatar} alt={user.name} />
                <h3>{user.name}</h3>
              </Profile>
            )
          )
      }

      <Tabs>
        {tabs[0] && tabs.map((tab, index) => 
          <Link key={index} to={tab.link}>{tab.name}</Link>
        )}

        <CTA to={button.link}>{button.name}</CTA>
      </Tabs>
    </Container>
  )
}
