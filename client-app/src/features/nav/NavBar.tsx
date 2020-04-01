import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'

interface IProps {
    openCreateForm: () => void
}

export const NavBar: React.FC<IProps> = ({openCreateForm}) => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    ITHandler
                </Menu.Item>
                <Menu.Item name='Tickets' />
                <Menu.Item name='Notes' />
                <Menu.Item name='Computers' />
                <Menu.Item>
                    <Button onClick={openCreateForm} positive content="New" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}
