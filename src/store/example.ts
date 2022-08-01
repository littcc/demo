import { createContext } from 'react'
import { observable, action, runInAction } from 'mobx'

export const exampleObjectStore = observable({
    counter: 0,
    counterStore() {
        this.counter++
    },
    increment() {
        this.counter++
    },
    decrement() {
        this.counter--
    },
    incrementAsync() {
        setTimeout(() => {
            this.counter++
        }, 1000)
    }
})

class ExampleClassStore {
    @observable counter = 0

    @action.bound
    increment() {
        runInAction(() => {
            this.counter++
        })
    }

    @action.bound
    decrement() {
        runInAction(() => {
            this.counter--
        })
    }

    @action.bound
    incrementAsync() {
        setTimeout(() => {
            runInAction(() => {
                this.counter++
            })
        }, 1000)
    }
}

export const exampleStore = new ExampleClassStore()

export const exampleContextStore = createContext(exampleStore)

const store = {
    exampleObjectStore,
    exampleStore,
    exampleContextStore
}

export default store
