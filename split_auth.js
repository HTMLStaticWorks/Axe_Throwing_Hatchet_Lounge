const fs = require('fs');
const path = require('path');

const dir = 'c:\\class\\.vscode\\axe_throughing';
const loginPath = path.join(dir, 'login.html');
const registerPath = path.join(dir, 'register.html');

let loginContent = fs.readFileSync(loginPath, 'utf8');

const loginFormHTML = `
                        <!-- Login Form -->
                        <div class="tab-pane fade show active" id="login" role="tabpanel">
                            <form>
                                <div class="mb-3">
                                    <label class="form-label small">Email Address</label>
                                    <input type="email" class="form-control bg-dark border-secondary text-white py-3" placeholder="name@example.com" required>
                                </div>
                                <div class="mb-3 position-relative">
                                    <div class="d-flex justify-content-between align-items-center mb-1">
                                        <label class="form-label small mb-0">Password</label>
                                        <a href="#" class="small text-highlight text-decoration-none">Forgot Password?</a>
                                    </div>
                                    <div class="input-group">
                                        <input type="password" class="form-control bg-dark border-secondary text-white py-3" placeholder="••••••••" required>
                                        <button class="btn btn-outline-secondary" type="button"><i data-lucide="eye" style="width: 18px;"></i></button>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="remember">
                                        <label class="form-check-label small text-muted" for="remember">Remember Me</label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 py-3 mb-4">Sign In</button>
                                
                                <div class="text-center position-relative mb-4">
                                    <hr class="border-secondary opacity-25">
                                    <span class="position-absolute top-50 start-50 translate-middle bg-body px-3 small text-muted">Or login with</span>
                                </div>
                                
                                <div class="row g-2">
                                    <div class="col-6">
                                        <button type="button" class="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center">
                                            <i data-lucide="chrome" class="me-2" style="width: 18px;"></i> Google
                                        </button>
                                    </div>
                                    <div class="col-6">
                                        <button type="button" class="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center">
                                            <i data-lucide="facebook" class="me-2" style="width: 18px;"></i> Facebook
                                        </button>
                                    </div>
                                </div>
                                <div class="text-center mt-4">
                                    <p class="small text-muted mb-0">Don't have an account? <a href="register.html" class="text-highlight fw-bold">Register here</a></p>
                                </div>
                            </form>
                        </div>
`;

const registerFormHTML = `
                        <!-- Register Form -->
                        <div class="tab-pane fade show active" id="register" role="tabpanel">
                            <form>
                                <div class="row g-2 mb-3">
                                    <div class="col-sm-6">
                                        <label class="form-label small">First Name</label>
                                        <input type="text" class="form-control bg-dark border-secondary text-white py-3" placeholder="John" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <label class="form-label small">Last Name</label>
                                        <input type="text" class="form-control bg-dark border-secondary text-white py-3" placeholder="Doe" required>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small">Email Address</label>
                                    <input type="email" class="form-control bg-dark border-secondary text-white py-3" placeholder="name@example.com" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small">Company Name</label>
                                    <input type="text" class="form-control bg-dark border-secondary text-white py-3" placeholder="Company LLC">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small">Password</label>
                                    <div class="input-group">
                                        <input type="password" class="form-control bg-dark border-secondary text-white py-3" placeholder="••••••••" required>
                                        <button class="btn btn-outline-secondary" type="button"><i data-lucide="eye" style="width: 18px;"></i></button>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small">Confirm Password</label>
                                    <div class="input-group">
                                        <input type="password" class="form-control bg-dark border-secondary text-white py-3" placeholder="••••••••" required>
                                        <button class="btn btn-outline-secondary" type="button"><i data-lucide="eye" style="width: 18px;"></i></button>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="terms" required>
                                        <label class="form-check-label small text-muted" for="terms">I agree to the <a href="#" class="text-highlight">Terms</a> & <a href="#" class="text-highlight">Privacy Policy</a>.</label>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 py-3 mb-4">Register</button>
                                
                                <div class="text-center mt-4">
                                    <p class="small text-muted mb-0">Already have an account? <a href="login.html" class="text-highlight fw-bold">Sign in</a></p>
                                </div>
                            </form>
                        </div>
`;

// Extract structure
const headRegex = /[\s\S]*?<div class="tab-content"[^>]*>/;
const tailRegex = /<\/div>\s*<div class="text-center mt-5">[\s\S]*/;

const headMatch = loginContent.match(headRegex)[0];
const tailMatch = loginContent.match(tailRegex)[0];

// Remove tabs navigation
const newHeadMatch = headMatch.replace(/<ul class="nav nav-pills nav-pills-auth mb-4 justify-content-center"[\s\S]*?<\/ul>/, '');

const finalLogin = newHeadMatch + '\n' + loginFormHTML + '\n' + tailMatch;
const finalRegister = newHeadMatch.replace('<title>Login / Register', '<title>Register') + '\n' + registerFormHTML + '\n' + tailMatch;

fs.writeFileSync(loginPath, finalLogin);
fs.writeFileSync(registerPath, finalRegister);

console.log('Auth pages split properly.');
