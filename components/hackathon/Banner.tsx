import Link from "next/link"

const points = ['Collaborate with like-minded individuals.', 'Solve real-world challenges.', 'Get mentored by industry experts.', 'Network with professionals from leading companies.']
export default function Banner() {
  return (
    <div className="mx-auto max-w-7xl p-8">
      <h3 className="flex justify-center text-3xl font-normal text-[#041A57] underline  decoration-slate-400 underline-offset-8">Why participate?</h3>

      <div className="p-10">
        <ul className="list-disc ">
          {points.map((item, index) => (
            <li key={index} >{item}</li>
          ))}
        </ul>
      </div>

      <div className="py-5">Register now and be part of the next big breakthrough! Don’t miss out on this opportunity to turn your ideas into reality and shape the future. Visit <Link className="text-blue-800" href={`/register/`}>here</Link> to secure your spot today.</div>
      <h3 className="font-semibold text-blue-600">Watch this space for more updates!</h3>
    </div>
  )
}
