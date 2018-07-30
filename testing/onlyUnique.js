        const options = [........]
        const onlyUnique = (value, index, self) => { return self.indexOf(value) === index };
        return options.filter(onlyUnique);
