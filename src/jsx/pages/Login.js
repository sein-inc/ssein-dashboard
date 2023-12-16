import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
	Container,
	Row,
	Col,
	Card,
	Form,
	Button,
	Image,
} from "react-bootstrap";
import { useDispatch } from "react-redux"
import { useLoginMutation } from '../../store/api/apiSlice';
import logo from '../../images/logo-full.png'
import bgimage from '../../images/login-img/pic-5.jpg';
import { checkLogin } from '../../store/functions/authFuctions';

function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [phone, setPhone] = useState("");
	let errorsObj = { phone: "", password: "" };
	const [errors, setErrors] = useState(errorsObj);
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const [login, { data, isError, isSuccess, isLoading }] = useLoginMutation();

	function onLogin(e) {
		e.preventDefault();
		let error = false;
		const errorObj = { ...errorsObj };
		if (phone === "") {
			errorObj.email = "Phone is Required";
			error = true;
		}
		if (password === "") {
			errorObj.password = "Password is Required";
			error = true;
		}
		setErrors(errorObj);
		if (error) {
			return;
		}

		login({ phone, password })
	}

	useEffect(() => {
		if (isError) {
			setErrorMessage("Invalid Credentials");
		}
		if (isSuccess) {
			setSuccessMessage("Login Successful");
			localStorage.setItem('user', JSON.stringify(data));
			localStorage.setItem('token', data.token);
			navigate('/dashboard');
			dispatch(checkLogin());
		}
	}, [isError, isSuccess]);

	return (
		<Container className="mt-0">
			<Row className="align-items-center justify-content-center bg-login">
				<Col xl={12} className="mt-5">
					<Card border="0">
						<Card.Body className="login-bx">
							<Row className="mt-5">
								<Col xl={8} md={6} className="text-center">
									<Image
										src={bgimage}
										className="mx-auto d-block"
										alt=""
										style={{
											width: "100%",
											height: "70%",
											objectFit: "cover",
											borderRadius: "10px",
										}}
									/>
								</Col>
								<Col xl={4} md={6} className="pe-0">
									<div className="sign-in-your">
										<div className="text-center mb-3">
											<svg xmlns="http://www.w3.org/2000/svg" width="123" height="80" fill="none" viewBox="0 0 123 80"><rect width="123" height="80" fill="#FF7622" rx="13" /><path fill="#fff" d="M21.188 48.36V41.916H21.62C22.244 44.004 23.084 45.468 24.14 46.308C25.196 47.148 26.516 47.568 28.1 47.568C30.548 47.568 31.772 46.788 31.772 45.228C31.772 44.556 31.472 44.052 30.872 43.716C29.936 43.188 28.736 42.78 27.272 42.492C25.64 42.06 24.272 41.484 23.168 40.764C21.848 39.9 21.188 38.532 21.188 36.66C21.188 34.788 21.764 33.3 22.916 32.196C24.068 31.068 25.604 30.504 27.524 30.504C28.7 30.504 29.912 30.78 31.16 31.332C31.616 31.524 31.964 31.62 32.204 31.62C32.444 31.62 32.648 31.536 32.816 31.368C32.984 31.2 33.188 30.888 33.428 30.432H33.824V35.94H33.392C32.168 32.82 30.272 31.26 27.704 31.26C26.576 31.26 25.736 31.464 25.184 31.872C24.632 32.256 24.356 32.748 24.356 33.348C24.356 33.708 24.44 33.996 24.608 34.212C24.776 34.404 24.908 34.548 25.004 34.644C25.1 34.74 25.256 34.848 25.472 34.968C25.688 35.064 25.868 35.148 26.012 35.22C26.156 35.268 26.372 35.34 26.66 35.436C26.972 35.532 27.2 35.592 27.344 35.616C28.976 36.024 30.152 36.384 30.872 36.696C31.592 36.984 32.276 37.344 32.924 37.776C34.244 38.688 34.904 40.164 34.904 42.204C34.904 44.22 34.304 45.756 33.104 46.812C31.904 47.844 30.26 48.36 28.172 48.36C26.684 48.36 25.244 48.012 23.852 47.316C23.564 47.124 23.336 47.028 23.168 47.028C22.64 47.028 22.124 47.472 21.62 48.36H21.188ZM36.7974 48.36V41.916H37.2294C37.8534 44.004 38.6934 45.468 39.7494 46.308C40.8054 47.148 42.1254 47.568 43.7094 47.568C46.1574 47.568 47.3814 46.788 47.3814 45.228C47.3814 44.556 47.0814 44.052 46.4814 43.716C45.5454 43.188 44.3454 42.78 42.8814 42.492C41.2494 42.06 39.8814 41.484 38.7774 40.764C37.4574 39.9 36.7974 38.532 36.7974 36.66C36.7974 34.788 37.3734 33.3 38.5254 32.196C39.6774 31.068 41.2134 30.504 43.1334 30.504C44.3094 30.504 45.5214 30.78 46.7694 31.332C47.2254 31.524 47.5734 31.62 47.8134 31.62C48.0534 31.62 48.2574 31.536 48.4254 31.368C48.5934 31.2 48.7974 30.888 49.0374 30.432H49.4334V35.94H49.0014C47.7774 32.82 45.8814 31.26 43.3134 31.26C42.1854 31.26 41.3454 31.464 40.7934 31.872C40.2414 32.256 39.9654 32.748 39.9654 33.348C39.9654 33.708 40.0494 33.996 40.2174 34.212C40.3854 34.404 40.5174 34.548 40.6134 34.644C40.7094 34.74 40.8654 34.848 41.0814 34.968C41.2974 35.064 41.4774 35.148 41.6214 35.22C41.7654 35.268 41.9814 35.34 42.2694 35.436C42.5814 35.532 42.8094 35.592 42.9534 35.616C44.5854 36.024 45.7614 36.384 46.4814 36.696C47.2014 36.984 47.8854 37.344 48.5334 37.776C49.8534 38.688 50.5134 40.164 50.5134 42.204C50.5134 44.22 49.9134 45.756 48.7134 46.812C47.5134 47.844 45.8694 48.36 43.7814 48.36C42.2934 48.36 40.8534 48.012 39.4614 47.316C39.1734 47.124 38.9454 47.028 38.7774 47.028C38.2494 47.028 37.7334 47.472 37.2294 48.36H36.7974ZM61.0468 48.36C57.9508 48.36 55.6228 47.568 54.0628 45.984C52.5268 44.376 51.7588 42.156 51.7588 39.324C51.7588 36.468 52.6228 34.284 54.3508 32.772C56.1028 31.26 58.3228 30.504 61.0108 30.504C66.4588 30.504 69.0748 33.24 68.8588 38.712H58.7068V40.116C58.7068 42.468 59.0068 44.244 59.6068 45.444C60.2068 46.644 61.2508 47.244 62.7388 47.244C65.5228 47.244 67.3468 45.756 68.2108 42.78L68.8588 42.888C68.4028 44.616 67.5748 45.96 66.3748 46.92C65.1988 47.88 63.4228 48.36 61.0468 48.36ZM58.7428 37.992H62.4508V36.228C62.4508 34.284 62.3308 32.964 62.0908 32.268C61.8748 31.548 61.4188 31.188 60.7227 31.188C60.0508 31.188 59.5468 31.572 59.2108 32.34C58.8988 33.084 58.7428 34.38 58.7428 36.228V37.992ZM75.4333 28.38C74.1613 28.38 73.2493 28.056 72.6973 27.408C72.1693 26.76 71.9053 25.956 71.9053 24.996C71.9053 24.036 72.1933 23.244 72.7693 22.62C73.3693 21.996 74.2693 21.684 75.4693 21.684C76.6693 21.684 77.5813 21.972 78.2053 22.548C78.8293 23.1 79.1413 23.904 79.1413 24.96C79.1413 25.992 78.8413 26.82 78.2413 27.444C77.6413 28.068 76.7053 28.38 75.4333 28.38ZM69.9973 30.864H78.8173V47.352H80.8333V48H70.1413V47.352H72.1213V31.512H69.9973V30.864ZM81.639 30.864H90.315V34.176C90.699 33.072 91.287 32.184 92.079 31.512C92.871 30.84 94.071 30.504 95.679 30.504C99.399 30.504 101.259 32.508 101.259 36.516V47.352H103.275V48H93.087V47.352H94.563V35.652C94.563 34.212 94.467 33.288 94.275 32.88C94.083 32.448 93.735 32.232 93.231 32.232C92.463 32.232 91.779 32.736 91.179 33.744C90.603 34.752 90.315 35.976 90.315 37.416V47.352H91.863V48H81.639V47.352H83.619V31.512H81.639V30.864Z" /></svg>

											<h4 className="mt-3 fs-20 font-w800 text-black">
												Admin Dashboard
											</h4>
											<span className="dlab-sign-up">Login</span>
										</div>
										{errorMessage && (
											<div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
												{errorMessage}
											</div>
										)}
										{successMessage && (
											<div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">
												{successMessage}
											</div>
										)}
										<Form onSubmit={onLogin}>
											<Form.Group className="mb-3">
												<Form.Label className="mb-1">
													<strong>Phone number</strong>
												</Form.Label>
												<Form.Control
													placeholder="Enter your phone number"
													type="phone"
													value={phone}
													onChange={(e) => setPhone(e.target.value)}
												/>
												{errors.phone && (
													<Form.Text className="text-danger fs-12">
														{errors.phone}
													</Form.Text>
												)}
											</Form.Group>
											<Form.Group className="mb-3">
												<Form.Label className="mb-1">
													<strong>Password</strong>
												</Form.Label>
												<Form.Control
													placeholder="************"
													type="password"
													value={password}
													onChange={(e) => setPassword(e.target.value)}
												/>
												{errors.password && (
													<Form.Text className="text-danger fs-12">
														{errors.password}
													</Form.Text>
												)}
											</Form.Group>
											<Row className="d-flex justify-content-between mt-4 mb-2">
												<Col className="mb-3">
													<Form.Check custom className="ms-1">
														<Form.Check.Input
															type="checkbox"
															id="basic_checkbox_1"
														/>
														<Form.Check.Label htmlFor="basic_checkbox_1">
															Remember my preference
														</Form.Check.Label>
													</Form.Check>
												</Col>
											</Row>
											<div className="text-center">
												<Button
													onLoad={isLoading}
													type="submit"
													className="btn btn-primary btn-block w-100 "
													style={{
														backgroundColor: "#ff4d00",
														border: "none",
													}}
												>
													Sign Me In
												</Button>
											</div>
										</Form>
									</div>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default Login;