
export const lib = [
{
  name: 'feedback-dialog',
  tagName: 'dialog',
  tmpl: '<dialog> <a class="close" href="#" @click="0">&#xd7;</a> <div :if="1" class="thanks"> <h2>Thank you!</h2> <p>Demo mode: No data was submitted</p> </div> <form autocomplete="on" :else @submit="2"> <h2>Give us feedback</h2> <p>Nothing is actually submitted on this demo</p> <div> <h3>Your name</h3> <input type="text" name="name" placeholder="Example: John Doe" required> </div> <div> <h3>Your email</h3> <input type="email" name="email" placeholder="your@email.com" required> </div> <div> <h3>Your thoughts</h3> <textarea name="feedback" placeholder="Type here..."></textarea> </div> <button>Submit</button> </form> </dialog>',
  Impl: class { 
    submit({ target }) {
      this.thanks = true
    }
   },
  fns: [
    (_,e) => { _.root.close() },
    _ => _.thanks,
    (_,e) => { {e.preventDefault();_.submit.call(_, e)} }
  ]
}]
export default lib[0]