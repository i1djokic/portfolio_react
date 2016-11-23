import React, {Component} from 'react';

class Contact extends Component {
  render() {
    return (
      <div><h3>You can contact me whit this form:</h3>

      <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
	<div class="row">
		<label for="name">Your name:</label><br />
		<input id="name" class="input" name="name" type="text" value="" size="30" /><br />
	</div>
	<div class="row">
		<label for="email">Your email:</label><br />
		<input id="email" class="input" name="email" type="text" value="" size="30" /><br />
	</div>
	<div class="row">
		<label for="message">Your message:</label><br />
		<textarea id="message" class="input" name="message" rows="17" cols="50"></textarea><br />
	</div>
	<input id="submit_button" type="submit" value="Send email" />
</form>

      </div>


    )
  }
}
export default Contact;
