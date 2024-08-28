import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export function NavbarComp() {
  return (
      <Navbar>
      <NavbarBrand>
        <img src="https://unavatar.io/github/AguuZzz" style={{height: "50px", borderRadius: "30px", position: "relative", left: "-10px"}}></img> 
        <Link href="https://github.com/AguuZzz" className="font-bold text-inherit">Aguz.py</Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link className="linkobj" href="https://twitter.com/aguzitopy" color="danger">Twitter</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link className="linkobj" href="https://github.com/AguuZzz" color="danger">Github</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link className="linkobj" href="#" color="danger">Discord</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar> 
  )
}
