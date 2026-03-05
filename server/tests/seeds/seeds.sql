-- =============================================
-- Admin user for frontend testing - do not delete
-- =============================================
INSERT INTO users (email, password, status, subdomain)
VALUES (
  'c@c.com',
  '$2b$10$A/gQANzmiA/uRAh9NxSqxOjVKYmMvEBMbN7xAwYku7wbbzOpPX9QS',
  'admin',
  'fr'
);

-- =============================================
-- User for: ping test (GET /monitoring/ping)
-- =============================================
INSERT INTO users (email, status, subdomain)
VALUES ('ping-test@example.com', 'unverified', 'www');

-- =============================================
-- Confirmed user for: log-in tests (read-only lookups)
-- Also reused by send-token-to-validate-email "already in use" test
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (email, password, status, subdomain)
VALUES (
  'confirmed@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'tier_1',
  'www'
);

-- =============================================
-- Unconfirmed user (NULL password) for: log-in "account not confirmed" test
-- =============================================
INSERT INTO users (email, password, status, subdomain)
VALUES ('unconfirmed@example.com', NULL, 'unverified', 'www');

-- =============================================
-- Dedicated user + session for: log-out tests
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (email, password, status, subdomain)
VALUES (
  'logout-user@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'tier_1',
  'www'
);

INSERT INTO user_session_tokens (id, user_id, token, expires_at, blacklisted)
SELECT
  'a0000000-0000-4000-8000-000000000001',
  id, 'logout-session-token', now() + interval '30 days', false
FROM users WHERE email = 'logout-user@example.com';

-- =============================================
-- Dedicated user + session for: user.get tests
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (email, password, status, subdomain)
VALUES (
  'userget@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'tier_1',
  'www'
);

INSERT INTO user_session_tokens (id, user_id, token, expires_at, blacklisted)
SELECT
  'b0000000-0000-4000-8000-000000000002',
  id, 'userget-session-token', now() + interval '30 days', false
FROM users WHERE email = 'userget@example.com';

-- =============================================
-- Unverified user for: sign-up test
-- =============================================
INSERT INTO users (email, status, subdomain)
VALUES ('signup@example.com', 'unverified', 'www');

-- Email validation token for: sign-up test (to be blacklisted during sign-up)
INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
SELECT id, 'aabbccdd-1111-4111-8111-aabbccddeeff', 'validate_email', false
FROM users WHERE email = 'signup@example.com';

-- =============================================
-- Dedicated user + session for: change-password tests
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (email, password, status, subdomain)
VALUES (
  'changepw@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'tier_1',
  'www'
);

INSERT INTO user_session_tokens (id, user_id, token, expires_at, blacklisted)
SELECT
  'c0000000-0000-4000-8000-000000000003',
  id, 'changepw-session-token', now() + interval '30 days', false
FROM users WHERE email = 'changepw@example.com';

-- =============================================
-- Dedicated user + session for: change-email tests
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (email, password, status, subdomain)
VALUES (
  'changeemail@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'tier_1',
  'www'
);

INSERT INTO user_session_tokens (id, user_id, token, expires_at, blacklisted)
SELECT
  'd0000000-0000-4000-8000-000000000004',
  id, 'changeemail-session-token', now() + interval '30 days', false
FROM users WHERE email = 'changeemail@example.com';

-- Extra user for: change-email "new email already in use" test
INSERT INTO users (email, password, status, subdomain)
VALUES (
  'taken@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'tier_1',
  'www'
);

-- =============================================
-- Unverified user with active email validation token for:
-- send-token-to-validate-email "token already sent" test
-- =============================================
INSERT INTO users (email, status, subdomain)
VALUES ('unverified-active-token@example.com', 'unverified', 'www');

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
SELECT id, '22222222-2222-4222-8222-222222222222', 'validate_email', false
FROM users WHERE email = 'unverified-active-token@example.com';

-- =============================================
-- Unverified user with 3 expired validation tokens for:
-- send-token-to-validate-email "maximum retries reached" test
-- created_at set to 100 hours ago (beyond 72h EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS)
-- =============================================
INSERT INTO users (email, status, subdomain)
VALUES ('unverified-max-retries@example.com', 'unverified', 'www');

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
SELECT id, 'expired-validate-token-1', 'validate_email', false, now() - interval '100 hours'
FROM users WHERE email = 'unverified-max-retries@example.com';

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
SELECT id, 'expired-validate-token-2', 'validate_email', false, now() - interval '100 hours'
FROM users WHERE email = 'unverified-max-retries@example.com';

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
SELECT id, 'expired-validate-token-3', 'validate_email', false, now() - interval '100 hours'
FROM users WHERE email = 'unverified-max-retries@example.com';

-- =============================================
-- Unverified user with active + blacklisted validation tokens for:
-- verify-token-to-validate-email tests
-- =============================================
INSERT INTO users (email, status, subdomain)
VALUES ('verify-email-token@example.com', 'unverified', 'www');

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
SELECT id, '33333333-3333-4333-8333-333333333333', 'validate_email', false
FROM users WHERE email = 'verify-email-token@example.com';

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
SELECT id, '44444444-4444-4444-8444-444444444444', 'validate_email', true
FROM users WHERE email = 'verify-email-token@example.com';

-- =============================================
-- Dedicated user + active reset token for:
-- verify-token-to-reset-password tests (read-only)
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (email, password, status, subdomain)
VALUES (
  'verify-reset-token@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'tier_1',
  'www'
);

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
SELECT id, '55555555-5555-4555-8555-555555555555', 'reset_password', false
FROM users WHERE email = 'verify-reset-token@example.com';

-- =============================================
-- Dedicated user + active reset token for:
-- reset-password test (will blacklist the token)
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (email, password, status, subdomain)
VALUES (
  'do-reset-pw@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'tier_1',
  'www'
);

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
SELECT id, '77777777-7777-4777-8777-777777777777', 'reset_password', false
FROM users WHERE email = 'do-reset-pw@example.com';

-- =============================================
-- User with active reset token for:
-- send-token-to-reset-password "token already sent" test
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (email, password, status, subdomain)
VALUES (
  'reset-active-token@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'tier_1',
  'www'
);

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
SELECT id, '66666666-6666-4666-8666-666666666666', 'reset_password', false
FROM users WHERE email = 'reset-active-token@example.com';

-- =============================================
-- User with 3 expired reset tokens for:
-- send-token-to-reset-password "max retries" test
-- created_at set to 10 hours ago (beyond 1h PASSWORD_RESET_TOKEN_DURATION_IN_HOURS)
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (email, password, status, subdomain)
VALUES (
  'reset-max-retries@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'tier_1',
  'www'
);

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
SELECT id, 'expired-reset-token-1', 'reset_password', false, now() - interval '10 hours'
FROM users WHERE email = 'reset-max-retries@example.com';

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
SELECT id, 'expired-reset-token-2', 'reset_password', false, now() - interval '10 hours'
FROM users WHERE email = 'reset-max-retries@example.com';

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
SELECT id, 'expired-reset-token-3', 'reset_password', false, now() - interval '10 hours'
FROM users WHERE email = 'reset-max-retries@example.com';

-- =============================================
-- Dedicated user (no active reset tokens) for:
-- send-token-to-reset-password "success" test
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (email, password, status, subdomain)
VALUES (
  'reset-success@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'tier_1',
  'www'
);

-- =============================================
-- Unverified user with 1 expired validation token for:
-- send-token-to-validate-email "retry allowed for existing unverified user" test
-- created_at set to 100 hours ago (beyond 72h EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS)
-- =============================================
INSERT INTO users (email, status, subdomain)
VALUES ('unverified-retry@example.com', 'unverified', 'www');

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
SELECT id, 'expired-retry-token-1', 'validate_email', false, now() - interval '100 hours'
FROM users WHERE email = 'unverified-retry@example.com';
