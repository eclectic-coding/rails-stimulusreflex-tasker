import {Controller} from "stimulus"
import StimulusReflex from "stimulus_reflex"

export default class extends Controller {
    static targets = ["form"]

    connect() {
        StimulusReflex.register(this)
    }

    createTaskSuccess(){
        console.log('Success lifecycle')
        this.formTarget.reset()

    }
}
