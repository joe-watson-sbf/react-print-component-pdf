

export const fakeTransaction = {
    available: {
        _event: {
            _created_by: {
                email: 'test46@gmail.com'
            },
            _created_date: 'Tue Oct 04 2022 - 15:27:42'
        },
        details: {
            fees: 4,
            payout_amount: 40,
            saved_date: 'Tue Oct 04 2022 - 15:27:00',
            status: 'AVAILABLE',
            total_cost: 44
        },
        receiver: {
            country: 'HAITI',
            full_name: 'Alexander Gilles',
            phone_number: '+1 283 3233 8984'
        },
        save_date: 1664911665406,
        sender: {
            amount: 40,
            country: 'USA',
            currency: 'USD',
            full_name: 'Smith Jack',
            method: 'Zelle',
            phone_number: '+1 (786) 262-6219'
        },
        transactionId: '6955549856'
    },
    received: {
        _event: {
            _created_by: {
                email: 'test@gmail.com'
            },
            _created_date: 'Tue Oct 04 2022 - 14:27:42',
            _delivered_by: {
                country: 'HAITI',
                date: 'Tue Oct 04 2022 - 15:51:51',
                email: 'test@gmail.com',
                full_name: 'Rodhail Aldy François',
                role: 'SUPER_ADMIN'
            }
        },
        delivery_date: 1664913116873,
        details: {
            fees: 4,
            payout_amount: 30,
            received_date: 'Tue Oct 04 2022 - 15:51:51',
            saved_date: 'Tue Oct 04 2022 - 14:27:00',
            status: 'RECEIVED',
            total_cost: 34
        },
        receiver: {
            country: 'HAITI',
            document: {
                id: '1035393812',
                type: 'CARTE IDENTIFICATION NATIONALE',
                url: 'https://firebasestorage.googleapis.com/v0/b/topplip-ab75a.appspot.com/o/documents%2F8055802118?alt=media&token=bc74a0f8-db08-46fb-925d-bde54d30923a'
            },
            full_name: 'Mike Theodore',
            phone_number: '(509)3612-8303',
            received_amount: 30,
            received_method: 'ZELLE'
        },
        save_date: 1664908070917,
        sender: {
            amount: 30,
            country: 'USA',
            currency: 'USD',
            full_name: 'Jasmin Joseph',
            method: 'Zelle',
            phone_number: '+1 (305) 879-1234'
        },
        transactionId: '2354631892'
    }
}