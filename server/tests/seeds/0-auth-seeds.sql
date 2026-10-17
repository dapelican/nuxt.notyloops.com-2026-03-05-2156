-- =============================================
-- Confirmed user for: log-in tests (read-only lookups)
-- Also reused by send-token-to-validate-email "already in use" test
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (id, email, password, status, subdomain)
VALUES (
  '50000000-0000-4000-8000-000000000002',
  'confirmed@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'premium',
  'www'
);

-- Active validate_email token so sign-up UPDATE guard is exercised for confirmed users
INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
VALUES (
  '50000000-0000-4000-8000-000000000002',
  '12121212-1212-4121-8121-121212121212',
  'validate_email',
  false
);

-- =============================================
-- Unconfirmed user (NULL password) for: log-in "account not confirmed" test
-- =============================================
INSERT INTO users (id, email, password, status, subdomain)
VALUES ('50000000-0000-4000-8000-000000000003', 'unconfirmed@example.com', NULL, 'unverified', 'www');

-- =============================================
-- Dedicated user + session for: log-out tests
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (id, email, password, status, subdomain)
VALUES (
  '50000000-0000-4000-8000-000000000004',
  'logout-user@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'premium',
  'www'
);

INSERT INTO user_session_tokens (id, user_id, token, expires_at, blacklisted)
VALUES (
  'a0000000-0000-4000-8000-000000000001',
  '50000000-0000-4000-8000-000000000004',
  'logout-session-token',
  now() + interval '30 days',
  false
);

-- =============================================
-- Dedicated user + session for: user.get tests
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (id, email, password, status, subdomain)
VALUES (
  '50000000-0000-4000-8000-000000000005',
  'userget@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'premium',
  'www'
);

INSERT INTO user_session_tokens (id, user_id, token, expires_at, blacklisted)
VALUES (
  'b0000000-0000-4000-8000-000000000002',
  '50000000-0000-4000-8000-000000000005',
  'userget-session-token',
  now() + interval '30 days',
  false
);

-- =============================================
-- Unverified user for: sign-up test
-- =============================================
INSERT INTO users (id, email, status, subdomain)
VALUES ('50000000-0000-4000-8000-000000000006', 'signup@example.com', 'unverified', 'www');

-- Email validation token for: sign-up test (to be blacklisted during sign-up)
INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
VALUES ('50000000-0000-4000-8000-000000000006', 'aabbccdd-1111-4111-8111-aabbccddeeff', 'validate_email', false);

-- =============================================
-- Dedicated user + session for: change-password tests
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (id, email, password, status, subdomain)
VALUES (
  '50000000-0000-4000-8000-000000000007',
  'changepw@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'premium',
  'www'
);

INSERT INTO user_session_tokens (id, user_id, token, expires_at, blacklisted)
VALUES (
  'c0000000-0000-4000-8000-000000000003',
  '50000000-0000-4000-8000-000000000007',
  'changepw-session-token',
  now() + interval '30 days',
  false
);

-- =============================================
-- Dedicated user + session for: change-email tests
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (id, email, password, status, subdomain)
VALUES (
  '50000000-0000-4000-8000-000000000008',
  'changeemail@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'premium',
  'www'
);

INSERT INTO user_session_tokens (id, user_id, token, expires_at, blacklisted)
VALUES (
  'd0000000-0000-4000-8000-000000000004',
  '50000000-0000-4000-8000-000000000008',
  'changeemail-session-token',
  now() + interval '30 days',
  false
);

-- Extra user for: change-email "new email already in use" test
INSERT INTO users (id, email, password, status, subdomain)
VALUES (
  '50000000-0000-4000-8000-000000000009',
  'taken@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'premium',
  'www'
);

-- =============================================
-- Unverified user with active email validation token for:
-- send-token-to-validate-email "token already sent" test
-- =============================================
INSERT INTO users (id, email, status, subdomain)
VALUES ('50000000-0000-4000-8000-00000000000a', 'unverified-active-token@example.com', 'unverified', 'www');

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
VALUES ('50000000-0000-4000-8000-00000000000a', '22222222-2222-4222-8222-222222222222', 'validate_email', false);

-- =============================================
-- Unverified user with 3 expired validation tokens for:
-- send-token-to-validate-email "maximum retries reached" test
-- created_at set to 100 hours ago (beyond 72h EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS)
-- =============================================
INSERT INTO users (id, email, status, subdomain)
VALUES ('50000000-0000-4000-8000-00000000000b', 'unverified-max-retries@example.com', 'unverified', 'www');

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
VALUES ('50000000-0000-4000-8000-00000000000b', 'expired-validate-token-1', 'validate_email', false, now() - interval '100 hours');

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
VALUES ('50000000-0000-4000-8000-00000000000b', 'expired-validate-token-2', 'validate_email', false, now() - interval '100 hours');

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
VALUES ('50000000-0000-4000-8000-00000000000b', 'expired-validate-token-3', 'validate_email', false, now() - interval '100 hours');

-- =============================================
-- Unverified user with active + blacklisted validation tokens for:
-- verify-token-to-validate-email tests
-- =============================================
INSERT INTO users (id, email, status, subdomain)
VALUES ('50000000-0000-4000-8000-00000000000c', 'verify-email-token@example.com', 'unverified', 'www');

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
VALUES ('50000000-0000-4000-8000-00000000000c', '33333333-3333-4333-8333-333333333333', 'validate_email', false);

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
VALUES ('50000000-0000-4000-8000-00000000000c', '44444444-4444-4444-8444-444444444444', 'validate_email', true);

-- =============================================
-- Dedicated user + active reset token for:
-- verify-token-to-reset-password tests (read-only)
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (id, email, password, status, subdomain)
VALUES (
  '50000000-0000-4000-8000-00000000000d',
  'verify-reset-token@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'premium',
  'www'
);

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
VALUES ('50000000-0000-4000-8000-00000000000d', '55555555-5555-4555-8555-555555555555', 'reset_password', false);

-- =============================================
-- Dedicated user + active reset token for:
-- reset-password test (will blacklist the token)
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (id, email, password, status, subdomain)
VALUES (
  '50000000-0000-4000-8000-00000000000e',
  'do-reset-pw@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'premium',
  'www'
);

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
VALUES ('50000000-0000-4000-8000-00000000000e', '77777777-7777-4777-8777-777777777777', 'reset_password', false);

-- =============================================
-- User with active reset token for:
-- send-token-to-reset-password "token already sent" test
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (id, email, password, status, subdomain)
VALUES (
  '50000000-0000-4000-8000-00000000000f',
  'reset-active-token@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'premium',
  'www'
);

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted)
VALUES ('50000000-0000-4000-8000-00000000000f', '66666666-6666-4666-8666-666666666666', 'reset_password', false);

-- =============================================
-- User with 3 expired reset tokens for:
-- send-token-to-reset-password "max retries" test
-- created_at set to 10 hours ago (beyond 1h PASSWORD_RESET_TOKEN_DURATION_IN_HOURS)
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (id, email, password, status, subdomain)
VALUES (
  '50000000-0000-4000-8000-000000000010',
  'reset-max-retries@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'premium',
  'www'
);

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
VALUES ('50000000-0000-4000-8000-000000000010', 'expired-reset-token-1', 'reset_password', false, now() - interval '10 hours');

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
VALUES ('50000000-0000-4000-8000-000000000010', 'expired-reset-token-2', 'reset_password', false, now() - interval '10 hours');

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
VALUES ('50000000-0000-4000-8000-000000000010', 'expired-reset-token-3', 'reset_password', false, now() - interval '10 hours');

-- =============================================
-- Dedicated user (no active reset tokens) for:
-- send-token-to-reset-password "success" test
-- Password plaintext: Test1234!
-- =============================================
INSERT INTO users (id, email, password, status, subdomain)
VALUES (
  '50000000-0000-4000-8000-000000000011',
  'reset-success@example.com',
  '$2b$10$wL7tkbBZQyt/YiigMxI08egh.xU.pP.D87SLSGjq4NJxXAlyj/p0i',
  'premium',
  'www'
);

-- =============================================
-- Unverified user with 1 expired validation token for:
-- send-token-to-validate-email "retry allowed for existing unverified user" test
-- created_at set to 100 hours ago (beyond 72h EMAIL_VALIDATION_TOKEN_DURATION_IN_HOURS)
-- =============================================
INSERT INTO users (id, email, status, subdomain)
VALUES ('50000000-0000-4000-8000-000000000012', 'unverified-retry@example.com', 'unverified', 'www');

INSERT INTO user_email_tokens (user_id, token, usage, blacklisted, created_at)
VALUES ('50000000-0000-4000-8000-000000000012', 'expired-retry-token-1', 'validate_email', false, now() - interval '100 hours');
