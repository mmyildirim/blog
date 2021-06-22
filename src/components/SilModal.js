import React from 'react'
import { useState } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { api } from '../api'

const SilModal = ({ yazi, push }) => {
    const [open, setOpen] = React.useState(false)
    const [hata, setHata] = useState("");
    const handleDelete = (id) => {
        api().delete(`/posts/${id}`)
            .then(() => {
                setHata("");
                setOpen(true);
                push('/');
            })
            .catch(() => {
                setHata("Yazi Silinirken Bir Hata Oluştu!")
            })

    }
    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='fullscreen'
            trigger={<Button className="ui  red inverted   button">Sil</Button>}
            className="mt-5"
        >
            <Header icon className="mt-5   alig-items-center justify-content-center">
                <Icon name='archive ' />

            </Header>
            <Modal.Content>
                <p className="text-center display-4">
                    Postu Silmek İstediğinize Eminmisiniz?
                    {hata&& <p className="text-red text-center display-4">Hata</p>}
                </p>
            </Modal.Content>
            <Modal.Actions className="alig-items-center justify-content-center d-flex">
                <Button basic color='red' inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> İptal Et
                </Button>
                <Button color='green' inverted onClick={() => {setOpen(false); handleDelete(yazi.id)}}>
                    <Icon name='checkmark' />Onayla
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default SilModal;
