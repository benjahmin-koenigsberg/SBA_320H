import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const InfoCard = ({props}) => {

const navigate = useNavigate()

  return (
      <div class="card p-4" >
          <div class="card-body text-center">
            {props.content}
          </div>
          <Button variant="dark" onClick={() => navigate(props.navigateTo)}>Next ➡️</Button>
      </div>
  )
}

export default InfoCard
