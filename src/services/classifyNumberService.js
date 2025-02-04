import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

class ClassifyNumberService {
    isPrime(num) {
        if (num <= 1 || !Number.isInteger(num)) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    isPerfect(num) {
        if (num <= 0 || !Number.isInteger(num)) return false;
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum === num;
    }

    isArmstrong(num) {
        const absNum = Math.abs(num);
        const digits = absNum.toString().split('');
        const power = digits.length;
        const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
        return sum === absNum;
    }

    getProperties(num) {
        const properties = [];
        if (this.isArmstrong(num)) properties.push('armstrong');
        if (num % 2 === 0) properties.push('even');
        else properties.push('odd');
        return properties;
    }

    // getDigitSum(num) {
    //     const digits = Math.abs(num).toString().split('');
    //     return digits.reduce((acc, digit) => acc + Number(digit), 0) * Math.sign(num);
    // }
    getDigitSum(num) {
        const digits = Math.abs(num).toString().split('');
        return digits.reduce((acc, digit) => acc + Number(digit), 0);
    }


    async fetchFunFact(num) {
        const apiUrl = process.env.NUMBERS_API_URL;
        const response = await axios.get(`${apiUrl}/${num}?json`);
        return response.data.text;
    }

    async classify(num) {
        const isPrime = this.isPrime(num);
        const isPerfect = this.isPerfect(num);
        const properties = this.getProperties(num);
        const digitSum = this.getDigitSum(num);
        const funFact = await this.fetchFunFact(num);

        return {
            number: num,
            is_prime: isPrime,
            is_perfect: isPerfect,
            properties: properties,
            digit_sum: digitSum,
            fun_fact: funFact
        };
    }
}

export { ClassifyNumberService };