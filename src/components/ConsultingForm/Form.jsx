import "./form.css";

function Form() {
	return (
		<div className="consultation-form">
			<form>
				<div className="row g-5">
					<div className="col-md-12 col-sm-12 col-lg-6">
						<div className="heading text-center">
							<p>
								We have a lot of demand. We will get back to you as soon as
								possible
							</p>
							<h3>
								Provide us with a description so that we can help you most
								efficiently
							</h3>
						</div>

						<hr />

						<GenericInput
							label="Describe your business and how it should work"
							placeholder="Describe your audience"
						/>
						<GenericInput
							label="Who you want to reach?"
							placeholder="Describe your audience"
						/>
						<GenericInput
							label="How are you going to help them?"
							placeholder="Describe your solution"
						/>
						<GenericInput
							label="How fast do you need to start your Business?"
							placeholder="Describe your business"
						/>
					</div>
					<div className="right col-md-12 col-sm-12 col-lg-6">
						<GenericInput label="How far is your idea?" placeholder="1" />
						<GenericInput
							label="What is your Budget?"
							placeholder=""
							type="number"
						/>
						<GenericInput
							label="Your Email"
							placeholder="e.g johncompany@gmail.com"
							type="email"
						/>
						<GenericInput label="Your name?" placeholder="name" />
						<GenericInput
							label="Your Phone number?"
							placeholder="name"
							type="number"
						/>
						<button className="book-consultation btn btn-primary w-100">
							Book a FREE Consultation
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Form;

function GenericInput({ label, placeholder, type = "text" }) {
	return (
		<div className="generic-input">
			<label htmlFor="business" className="form-label">
				{label}
			</label>
			<input
				type={type}
				className="generic-input-text form-control"
				id="business"
				placeholder={placeholder}
			/>
		</div>
	);
}
