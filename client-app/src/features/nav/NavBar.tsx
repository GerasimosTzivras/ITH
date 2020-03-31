import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

export const NavBar = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    ITHandler  58
                </Menu.Item>
                <Menu.Item name='Tickets' />
                <Menu.Item name='Notes' />
                <Menu.Item name='Computers' />
                <Menu.Item>
                    <Button positive content="New" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}
