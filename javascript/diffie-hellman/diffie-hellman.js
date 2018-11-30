class DiffieHellman {
    constructor (...primes) {
        const isPrime = primes.every(this._isPrime)
        const isInRange = primes.every(prime => prime > 0 && prime < 9999)
        if (!isPrime || !isInRange) throw new Error()

        this.primes = primes
    }

    _isPrime (val) {
        for (let i = 2; i < val; i++) {
            if (val % i === 0) return false
        }

        return val > 1
    }

    getPublicKeyFromPrivateKey (val) {
        const [ p, g ] = this.primes
        if (val < 2 || val >= p) throw new Error()
        return (g ** val) % p
    }

    getSharedSecret (priv, pub) {
        const [ p, g ] = this.primes
        return (pub ** priv) % p
    }
}

module.exports = DiffieHellman