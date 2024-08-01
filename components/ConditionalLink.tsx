import Link from "next/link";


export default function ConditionalLink({ href, children, ...props }) {
  return href ? <Link href={href} {...props}>{children}</Link> : <>{children}</>
}