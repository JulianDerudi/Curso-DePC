const contacts_data = [
    {
        contact_id: 1,
        contact_name: 'Ryan',
        contact_avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        last_message_created_at: new Date(),
        last_message_content: 'Eu',
        last_message_status: 'NOT_RECEIVED',
        messages: [
            {
                message_id: 1,
                message_content: 'Hola',
                message_created_at: new Date('2024-01-01T10:00:00'),
                message_status: 'SENT',
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: 'Como estas?',
                message_created_at: new Date('2024-01-01T10:05:00'),
                message_status: 'DELIVERED',
                send_by_me: true
            },
            {
                message_id: 3,
                message_content: 'Todo bien, y vos?',
                message_created_at: new Date('2024-01-01T10:10:00'),
                message_status: 'SEEN',
                send_by_me: false
            }            

        ]
    },
    {
        contact_id: 2,
        contact_name: 'Ching Uan',
        contact_avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        last_message_created_at: new Date('2024-01-01T11:45:00'),
        last_message_content: 'buenass',
        last_message_status: 'SEEN',
        messages: [
            {
                message_id: 1,
                message_content: 'Hola',
                message_created_at: new Date('2024-01-01T11:00:00'),
                message_status: 'SENT',
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: 'Que tal?',
                message_created_at: new Date('2024-01-01T11:15:00'),
                message_status: 'DELIVERED',
                send_by_me: true
            },
            {
                message_id: 3,
                message_content: 'Muy bien, gracias!',
                message_created_at: new Date('2024-01-01T11:30:00'),
                message_status: 'SEEN',
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 3,
        contact_name: 'John',
        contact_avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        last_message_created_at: new Date('2024-01-01T14:15:00'),
        last_message_content: 'See you later!',
        last_message_status: 'UNSEEN',
        messages: []
    },
]



export default contacts_data;