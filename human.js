let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.isMale = function () {
        return (this.gender === 'male');
    }

    this.setGender = function (gender) {
        this.gender = gender;
    }

    this.getGender = function () {
        return this.gender;
    }

    this.checkApple = function (apple) {
        return apple.getWeight();
    }

    this.eat = function (apple) {
        if(!apple.isEmpty()){
            this.weight++;
            apple.weight--;
        }
    }

    this.say = function (str) {
        console.log(str);
    }

    this.getName = function () {
        return this.name;
    }

    this.setName = function (name) {
        this.name = name;
    }

    this.setWeight = function (weight) {
        this.weight = weight;
    }

    this.getWeight = function () {
        return this.weight;
    }
}