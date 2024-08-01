import ProductDescription from "components/sections/product-description";
import Banner from "./Banner";


export default function Hackathon() {
  return (
    <div>
      <ProductDescription
        showRegister={true}
        image='/images/pexels-tom-swinnen-1309766-1-scaled-e1710487377181.webp' title='HACKATHON'
        description={'Are you  a student who loves programming? Do you love solving problems? Then join us at the AIDAYS Hackathon 2024. Ideate on how to solve real world problem statements, learn from our mentors, showcase your skills, and make a real impact.'}  />
      <Banner />
    </div>
  )
}
