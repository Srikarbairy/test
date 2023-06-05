import React, {useState, useEffect} from 'react'

export default function Progressbar() {
	const [filled, setFilled] = useState(0);

	useEffect(() => {
        if(filled >= 0 && filled <=100){
            setTimeout(()=> setFilled((prev) => (prev +=1)),1000)
        }

        if(filled === 100){
            setTimeout(()=> setFilled((prev) => (prev -=1)),1000)
        }

	},[filled ])
  return (
	  <div>
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${filled}%`,
				  backgroundColor: "red",
				  transition:"width 0.5s"
			  }}></div>
			  <span className="progressPercent">{ filled }%</span>
		  </div>
		  
	</div>
  )
}