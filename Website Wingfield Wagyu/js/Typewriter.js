/*
    This js file is used to code the typewriter animation on the home page. 
    This animation adds the title letter by letter to the homescreen.
*/

class Typewriter {
    //Set the variables for the tylewriter animation
    constructor(el, options){
        this.el = el;
        //Split the title by the letter
        this.title = [...this.el.dataset.typewriter.split('')];
        //Set the speed to a default value if the speed is not specified.
        this.speed = options?.speed || 50;
        //Start the typewriting immediately
        this.initTyping();
    }

    //Set the delay wait.
    wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    
    //Go letter by letter with a delay between each letter
    async typewrite(word) {
        for(const letter of word) {
            this.el.textContent += letter;
            await this.wait(this.speed)
        }
    }

    //Used to start the animation.
    initTyping() {
        this.typewrite(this.title);
    }
}

//Find the heading to add animation to and set the parameters.
const el1 = new Typewriter(document.querySelector('[data-typewriter]'), {
    speed: 75
});

