import React from "react"
import Loadable from "@loadable/component"

// TODO: Maybe it's better to do the loadable thing on a specific component
// rather than an entire section like this stuff

const ClientSide = Loadable(() =>
  import("../components/componentSections/base")
)
const Index = () => {
  return <ClientSide />
}

export default Index
