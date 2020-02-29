class ContactUs_Page {

	get firstName() { return $("[name='first_name']"); }
	get lastName() { return $("[name='last_name']"); }
	get comments() { return $("textarea"); }
	get emailAddress() { return $("[name='email']"); }
	get submitButton() { return $("[type='submit']"); }
	get successfulSubmissionHeader() { return $('#contact_reply h1'); }
	get unsuccessfulSubmissionHeader() { return $('body'); }



	setFirstName(firstname) {
		return this.firstName.setValue(firstname);
	}

	setLastName(lastname) {
		return this.lastName.setValue(lastname);
	}

	setEmailAddress(email) {
		return this.emailAddress.setValue(email);
	}

	setComments(comments) {
		return this.comments.setValue(comments);
	}

	clickSubmit() {
		return this.submitButton.click();
	}

	submitAllInformationViaContactUsForm(firstName, lasteName, emailAddress, comments) {

		if (firstName) {
			this.firstName.setValue(firstName);
		}

		if (lasteName) {
			this.lastName.setValue(lasteName);

		}
		if (emailAddress) {
			this.emailAddress.setValue(emailAddress);
		}
		if (comments) {
			this.comments.setValue(comments);
		}
		this.submitButton.click();
		this.confirmSuccessfulSubmission();

	}

	confirmSuccessfulSubmission() {
		var successfulSubmissionHeader = '#contact_reply h1';
		var validatesubmissionHeader = browser.waitUntil(function () {
			return browser.getText(successfulSubmissionHeader) == 'Thank You for your Message!'
		}, 3000)
		expect(validatesubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
	}

	confirmUnSuccessfulSubmission() {
		var unsuccessfulSubmissionHeader = 'body';
		var validatesubmissionHeader = browser.waitUntil(function () {
			return browser.getText(unsuccessfulSubmissionHeader) == 'Error: all fields are required'
		}, 3000)
		expect(browser.getText(unsuccessfulSubmissionHeader)).to.include('Error: all fields are required');


	}


}

module.exports = new ContactUs_Page();

