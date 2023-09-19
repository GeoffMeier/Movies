import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
	useNavigate,
	Route,
	Routes,
	BrowserRouter,
	Router,
} from "react-router-dom";
import {
	ClerkProvider,
	RedirectToSignIn,
	SignIn,
	SignUp,
	SignedIn,
	SignedOut,
} from "@clerk/clerk-react";
import ProtectedPage from "./ProtectedPage";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
const ClerkWithRoutes = () => {
	const navigate = useNavigate();
	return (
		<ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
			<Routes>
				{/* <Route path="/" element={<App />} /> */}
				<Route
					path="/sign-in/*"
					element={<SignIn redirectUrl={"/"} routing="path" path="/sign-in" />}
				/>
				<Route
					path="/sign-up/*"
					element={<SignUp redirectUrl={"/"} routing="path" path="/sign-up" />}
				/>
				<Route
					path="/movies"
					element={
						<>
							<SignedIn>
								<ProtectedPage />
							</SignedIn>

							<SignedOut>
								<RedirectToSignIn />
							</SignedOut>
							<App />
						</>
					}
				/>
			</Routes>
		</ClerkProvider>
	);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ClerkWithRoutes />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
