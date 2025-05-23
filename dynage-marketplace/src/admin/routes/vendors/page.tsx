import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Shopping } from "@medusajs/icons"
import { Container, Heading } from "@medusajs/ui"

const CustomPage = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">This is my custom route</Heading>
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Vendor Admin",
  icon: Shopping,
})

export default CustomPage