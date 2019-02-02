        this.documentsItem = [
            {text: 'Договори', value: 'agreements'},
            {text: 'Додаткові угоди', value: 'addendums'},
            {text: 'Акти/Накладні', value: 'acts'},
            {text: 'Штрафи', value: 'fines'}
        ];
        const arr = Array.from(this.documentsItem, item=> item.value)
        // ["agreements", "addendums", "acts", "fines"]
