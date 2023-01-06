import React from "react";
import Link from 'next/link'

export default function link({ children, href }) {
  const fontEle = {
    fontSize: 18,
    color:"black",
    fontFamily: "Arial",
    marginLeft:20,
    marginRight:20,
  };
  return (
    <Link style={fontEle} href={href}>{children}</Link>
  );
}
