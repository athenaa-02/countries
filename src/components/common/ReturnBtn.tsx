import { Link } from "react-router-dom"

function ReturnBtn() {
  return (
       <div >
          <Link to={"/"} className="flex items-center gap-2">
            <svg
              width="19"
              height="12"
              viewBox="0 0 19 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.89269 -5.96046e-08L7.0712 1.17851L3.18211 5.0676L18.0314 5.0676L18.0314 6.71751L3.18211 6.71751L7.0712 10.6066L5.89269 11.7851L0.000132627 5.89256L5.89269 -5.96046e-08Z"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="#111517"
              />
            </svg>
            Back
          </Link>
        </div>
  )
}

export default ReturnBtn