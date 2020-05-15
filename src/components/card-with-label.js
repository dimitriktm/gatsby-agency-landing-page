import React from "react"

import BtnFlat from "../components/btn-flat"

export default ({ label, title, children }) => (
  <div className="card-with-label">
    <div className="card-with-label-body">
      <BtnFlat as="span" className="button-rounded-full card-with-label-label">
        {label}
      </BtnFlat>
      <h3 className="mb-2">{title}</h3>
      <div className="card-with-label-line"></div>
      <div>{children}</div>
    </div>
  </div>
)
