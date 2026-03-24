-- =============================================
-- Admin user for frontend testing - do not delete
-- =============================================
INSERT INTO users (email, password, status, subdomain)
VALUES (
  'a@a.com',
  '$2b$10$A/gQANzmiA/uRAh9NxSqxOjVKYmMvEBMbN7xAwYku7wbbzOpPX9QS',
  'admin',
  'fr'
);

INSERT INTO users (email, password, status, premium_status_expiration_date, subdomain)
VALUES (
  'b@b.com',
  '$2b$10$A/gQANzmiA/uRAh9NxSqxOjVKYmMvEBMbN7xAwYku7wbbzOpPX9QS',
  'premium',
  '2027-05-08T00:00:00.000Z',
  'fr'
);

INSERT INTO users (email, password, status, subdomain)
VALUES (
  'c@c.com',
  '$2b$10$A/gQANzmiA/uRAh9NxSqxOjVKYmMvEBMbN7xAwYku7wbbzOpPX9QS',
  'free',
  'fr'
);

INSERT INTO users (email, password, status, subdomain)
VALUES (
  'd@d.com',
  '$2b$10$A/gQANzmiA/uRAh9NxSqxOjVKYmMvEBMbN7xAwYku7wbbzOpPX9QS',
  'premium',
  'fr'
);

WITH
  afrique_01 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Afrique du Sud (Afrique)'
    )
    RETURNING id
  ),
  afrique_02 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Algérie (Afrique)'
    )
    RETURNING id
  ),
  afrique_03 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Angola (Afrique)'
    )
    RETURNING id
  ),
  afrique_04 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Bénin (Afrique)'
    )
    RETURNING id
  ),
  afrique_05 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Botswana (Afrique)'
    )
    RETURNING id
  ),
  afrique_06 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Burkina Faso (Afrique)'
    )
    RETURNING id
  ),
  afrique_07 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Burundi (Afrique)'
    )
    RETURNING id
  ),
  afrique_08 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Cameroun (Afrique)'
    )
    RETURNING id
  ),
  afrique_09 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Cap-Vert (Afrique)'
    )
    RETURNING id
  ),
  afrique_10 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Comores (Afrique)'
    )
    RETURNING id
  ),
  afrique_11 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Côte d''Ivoire (Afrique)'
    )
    RETURNING id
  ),
  afrique_12 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Djibouti (Afrique)'
    )
    RETURNING id
  ),
  afrique_13 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Égypte (Afrique)'
    )
    RETURNING id
  ),
  afrique_14 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Érythrée (Afrique)'
    )
    RETURNING id
  ),
  afrique_15 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Eswatini (Afrique)'
    )
    RETURNING id
  ),
  afrique_16 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Éthiopie (Afrique)'
    )
    RETURNING id
  ),
  afrique_17 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Gabon (Afrique)'
    )
    RETURNING id
  ),
  afrique_18 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Gambie (Afrique)'
    )
    RETURNING id
  ),
  afrique_19 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Ghana (Afrique)'
    )
    RETURNING id
  ),
  afrique_20 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Guinée (Afrique)'
    )
    RETURNING id
  ),
  afrique_21 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Guinée équatoriale (Afrique)'
    )
    RETURNING id
  ),
  afrique_22 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Guinée-Bissau (Afrique)'
    )
    RETURNING id
  ),
  afrique_23 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Kenya (Afrique)'
    )
    RETURNING id
  ),
  afrique_24 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Lesotho (Afrique)'
    )
    RETURNING id
  ),
  afrique_25 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Liberia (Afrique)'
    )
    RETURNING id
  ),
  afrique_26 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Libye (Afrique)'
    )
    RETURNING id
  ),
  afrique_27 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Madagascar (Afrique)'
    )
    RETURNING id
  ),
  afrique_28 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Malawi (Afrique)'
    )
    RETURNING id
  ),
  afrique_29 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Mali (Afrique)'
    )
    RETURNING id
  ),
  afrique_30 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Maroc (Afrique)'
    )
    RETURNING id
  ),
  afrique_31 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Maurice (Afrique)'
    )
    RETURNING id
  ),
  afrique_32 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Mauritanie (Afrique)'
    )
    RETURNING id
  ),
  afrique_33 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Mozambique (Afrique)'
    )
    RETURNING id
  ),
  afrique_34 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Namibie (Afrique)'
    )
    RETURNING id
  ),
  afrique_35 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Niger (Afrique)'
    )
    RETURNING id
  ),
  afrique_36 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Nigeria (Afrique)'
    )
    RETURNING id
  ),
  afrique_37 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Ouganda (Afrique)'
    )
    RETURNING id
  ),
  afrique_38 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'République centrafricaine (Afrique)'
    )
    RETURNING id
  ),
  afrique_39 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'République démocratique du Congo (Afrique)'
    )
    RETURNING id
  ),
  afrique_40 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'République du Congo (Afrique)'
    )
    RETURNING id
  ),
  afrique_41 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Rwanda (Afrique)'
    )
    RETURNING id
  ),
  afrique_42 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Sao Tomé-et-Principe (Afrique)'
    )
    RETURNING id
  ),
  afrique_43 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Sénégal (Afrique)'
    )
    RETURNING id
  ),
  afrique_44 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Seychelles (Afrique)'
    )
    RETURNING id
  ),
  afrique_45 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Sierra Leone (Afrique)'
    )
    RETURNING id
  ),
  afrique_46 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Somalie (Afrique)'
    )
    RETURNING id
  ),
  afrique_47 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Soudan (Afrique)'
    )
    RETURNING id
  ),
  afrique_48 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Soudan du Sud (Afrique)'
    )
    RETURNING id
  ),
  afrique_49 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Tanzanie (Afrique)'
    )
    RETURNING id
  ),
  afrique_50 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Tchad (Afrique)'
    )
    RETURNING id
  ),
  afrique_51 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Togo (Afrique)'
    )
    RETURNING id
  ),
  afrique_52 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Tunisie (Afrique)'
    )
    RETURNING id
  ),
  afrique_53 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Zambie (Afrique)'
    )
    RETURNING id
  ),
  afrique_54 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Zimbabwe (Afrique)'
    )
    RETURNING id
  ),
  amerique_du_nord_01 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Antigua-et-Barbuda (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_02 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Bahamas (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_03 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Barbade (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_04 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Belize (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_05 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Canada (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_06 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Costa Rica (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_07 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Cuba (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_08 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Dominique (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_09 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'États-Unis (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_10 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Grenade (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_11 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Guatemala (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_12 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Haïti (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_13 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Honduras (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_14 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Jamaïque (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_15 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Mexique (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_16 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Nicaragua (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_17 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Panama (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_18 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'République dominicaine (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_19 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Saint-Kitts-et-Nevis (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_20 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Saint-Vincent-et-les-Grenadines (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_21 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Sainte-Lucie (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_22 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Salvador (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_nord_23 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Trinité-et-Tobago (Amérique du Nord)'
    )
    RETURNING id
  ),
  amerique_du_sud_01 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Argentine (Amérique du Sud)'
    )
    RETURNING id
  ),
  amerique_du_sud_02 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Bolivie (Amérique du Sud)'
    )
    RETURNING id
  ),
  amerique_du_sud_03 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Brésil (Amérique du Sud)'
    )
    RETURNING id
  ),
  amerique_du_sud_04 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Chili (Amérique du Sud)'
    )
    RETURNING id
  ),
  amerique_du_sud_05 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Colombie (Amérique du Sud)'
    )
    RETURNING id
  ),
  amerique_du_sud_06 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Équateur (Amérique du Sud)'
    )
    RETURNING id
  ),
  amerique_du_sud_07 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Guyana (Amérique du Sud)'
    )
    RETURNING id
  ),
  amerique_du_sud_08 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Paraguay (Amérique du Sud)'
    )
    RETURNING id
  ),
  amerique_du_sud_09 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Pérou (Amérique du Sud)'
    )
    RETURNING id
  ),
  amerique_du_sud_10 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Suriname (Amérique du Sud)'
    )
    RETURNING id
  ),
  amerique_du_sud_11 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Uruguay (Amérique du Sud)'
    )
    RETURNING id
  ),
  amerique_du_sud_12 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Venezuela (Amérique du Sud)'
    )
    RETURNING id
  ),
  asie_01 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Afghanistan (Asie)'
    )
    RETURNING id
  ),
  asie_02 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Arabie saoudite (Asie)'
    )
    RETURNING id
  ),
  asie_03 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Arménie (Asie)'
    )
    RETURNING id
  ),
  asie_04 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Azerbaïdjan (Asie)'
    )
    RETURNING id
  ),
  asie_05 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Bahreïn (Asie)'
    )
    RETURNING id
  ),
  asie_06 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Bangladesh (Asie)'
    )
    RETURNING id
  ),
  asie_07 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Bhoutan (Asie)'
    )
    RETURNING id
  ),
  asie_08 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Birmanie (Asie)'
    )
    RETURNING id
  ),
  asie_09 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Brunei (Asie)'
    )
    RETURNING id
  ),
  asie_10 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Cambodge (Asie)'
    )
    RETURNING id
  ),
  asie_11 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Chine (Asie)'
    )
    RETURNING id
  ),
  asie_12 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Corée du Nord (Asie)'
    )
    RETURNING id
  ),
  asie_13 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Corée du Sud (Asie)'
    )
    RETURNING id
  ),
  asie_14 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Émirats arabes unis (Asie)'
    )
    RETURNING id
  ),
  asie_15 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Géorgie (Asie)'
    )
    RETURNING id
  ),
  asie_16 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Inde (Asie)'
    )
    RETURNING id
  ),
  asie_17 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Indonésie (Asie)'
    )
    RETURNING id
  ),
  asie_18 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Irak (Asie)'
    )
    RETURNING id
  ),
  asie_19 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Iran (Asie)'
    )
    RETURNING id
  ),
  asie_20 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Israël (Asie)'
    )
    RETURNING id
  ),
  asie_21 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Japon (Asie)'
    )
    RETURNING id
  ),
  asie_22 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Jordanie (Asie)'
    )
    RETURNING id
  ),
  asie_23 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Kazakhstan (Asie)'
    )
    RETURNING id
  ),
  asie_24 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Kirghizistan (Asie)'
    )
    RETURNING id
  ),
  asie_25 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Koweït (Asie)'
    )
    RETURNING id
  ),
  asie_26 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Laos (Asie)'
    )
    RETURNING id
  ),
  asie_27 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Liban (Asie)'
    )
    RETURNING id
  ),
  asie_28 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Malaisie (Asie)'
    )
    RETURNING id
  ),
  asie_29 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Maldives (Asie)'
    )
    RETURNING id
  ),
  asie_30 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Mongolie (Asie)'
    )
    RETURNING id
  ),
  asie_31 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Népal (Asie)'
    )
    RETURNING id
  ),
  asie_32 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Oman (Asie)'
    )
    RETURNING id
  ),
  asie_33 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Ouzbékistan (Asie)'
    )
    RETURNING id
  ),
  asie_34 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Pakistan (Asie)'
    )
    RETURNING id
  ),
  asie_35 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Philippines (Asie)'
    )
    RETURNING id
  ),
  asie_36 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Qatar (Asie)'
    )
    RETURNING id
  ),
  asie_37 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Singapour (Asie)'
    )
    RETURNING id
  ),
  asie_38 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Sri Lanka (Asie)'
    )
    RETURNING id
  ),
  asie_39 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Syrie (Asie)'
    )
    RETURNING id
  ),
    asie_40 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Tadjikistan (Asie)'
    )
    RETURNING id
  ),
  asie_41 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Thaïlande (Asie)'
    )
    RETURNING id
  ),
  asie_42 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Timor oriental (Asie)'
    )
    RETURNING id
  ),
  asie_43 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Turkménistan (Asie)'
    )
    RETURNING id
  ),
  asie_44 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Turquie (Asie)'
    )
    RETURNING id
  ),
  asie_45 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Viêt Nam (Asie)'
    )
    RETURNING id
  ),
  asie_46 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Yémen (Asie)'
    )
    RETURNING id
  ),
    europe_01 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Albanie (Europe)'
    )
    RETURNING id
  ),
  europe_02 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Allemagne (Europe)'
    )
    RETURNING id
  ),
  europe_03 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Andorre (Europe)'
    )
    RETURNING id
  ),
  europe_04 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Autriche (Europe)'
    )
    RETURNING id
  ),
  europe_05 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Belgique (Europe)'
    )
    RETURNING id
  ),
  europe_06 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Biélorussie (Europe)'
    )
    RETURNING id
  ),
  europe_07 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Bosnie-Herzégovine (Europe)'
    )
    RETURNING id
  ),
  europe_08 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Bulgarie (Europe)'
    )
    RETURNING id
  ),
  europe_09 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Chypre (Europe)'
    )
    RETURNING id
  ),
  europe_10 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Croatie (Europe)'
    )
    RETURNING id
  ),
  europe_11 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Danemark (Europe)'
    )
    RETURNING id
  ),
  europe_12 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Espagne (Europe)'
    )
    RETURNING id
  ),
  europe_13 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Estonie (Europe)'
    )
    RETURNING id
  ),
  europe_14 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Finlande (Europe)'
    )
    RETURNING id
  ),
  europe_15 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'France (Europe)'
    )
    RETURNING id
  ),
  europe_16 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Grèce (Europe)'
    )
    RETURNING id
  ),
  europe_17 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Hongrie (Europe)'
    )
    RETURNING id
  ),
  europe_18 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Irlande (Europe)'
    )
    RETURNING id
  ),
  europe_19 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Islande (Europe)'
    )
    RETURNING id
  ),
  europe_20 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Italie (Europe)'
    )
    RETURNING id
  ),
  europe_21 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Lettonie (Europe)'
    )
    RETURNING id
  ),
  europe_22 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Liechtenstein (Europe)'
    )
    RETURNING id
  ),
  europe_23 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Lituanie (Europe)'
    )
    RETURNING id
  ),
  europe_24 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Luxembourg (Europe)'
    )
    RETURNING id
  ),
  europe_25 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Macédoine du Nord (Europe)'
    )
    RETURNING id
  ),
  europe_26 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Malte (Europe)'
    )
    RETURNING id
  ),
  europe_27 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Moldavie (Europe)'
    )
    RETURNING id
  ),
  europe_28 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Monaco (Europe)'
    )
    RETURNING id
  ),
  europe_29 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Monténégro (Europe)'
    )
    RETURNING id
  ),
  europe_30 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Norvège (Europe)'
    )
    RETURNING id
  ),
  europe_31 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Pays-Bas (Europe)'
    )
    RETURNING id
  ),
  europe_32 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Pologne (Europe)'
    )
    RETURNING id
  ),
  europe_33 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Portugal (Europe)'
    )
    RETURNING id
  ),
  europe_34 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Roumanie (Europe)'
    )
    RETURNING id
  ),
  europe_35 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Royaume-Uni (Europe)'
    )
    RETURNING id
  ),
  europe_36 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Russie (Europe)'
    )
    RETURNING id
  ),
  europe_37 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Saint-Marin (Europe)'
    )
    RETURNING id
  ),
  europe_38 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Serbie (Europe)'
    )
    RETURNING id
  ),
  europe_39 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Slovaquie (Europe)'
    )
    RETURNING id
  ),
    europe_40 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Slovénie (Europe)'
    )
    RETURNING id
  ),
  europe_41 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Suède (Europe)'
    )
    RETURNING id
  ),
  europe_42 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Suisse (Europe)'
    )
    RETURNING id
  ),
  europe_43 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Tchéquie (République tchèque) (Europe)'
    )
    RETURNING id
  ),
  europe_44 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Ukraine (Europe)'
    )
    RETURNING id
  ),
  europe_45 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Vatican (Europe)'
    )
    RETURNING id
  ),
  oceanie_01 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Australie (Océanie)'
    )
    RETURNING id
  ),
  oceanie_02 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Etats fédérés de Micronésie (Océanie)'
    )
    RETURNING id
  ),
  oceanie_03 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Fidji (Océanie)'
    )
    RETURNING id
  ),
  oceanie_04 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Iles Marshall (Océanie)'
    )
    RETURNING id
  ),
  oceanie_05 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Iles Salomon (Océanie)'
    )
    RETURNING id
  ),
  oceanie_06 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Kitibati (Océanie)'
    )
    RETURNING id
  ),
  oceanie_07 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Nauru (Océanie)'
    )
    RETURNING id
  ),
  oceanie_08 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Nouvelle-Zélande (Océanie)'
    )
    RETURNING id
  ),
  oceanie_09 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Palaos (Océanie)'
    )
    RETURNING id
  ),
  oceanie_10 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Papouasie-Nouvelle-Guinée (Océanie)'
    )
    RETURNING id
  ),
  oceanie_11 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Samoa (Océanie)'
    )
    RETURNING id
  ),
  oceanie_12 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Tonga (Océanie)'
    )
    RETURNING id
  ),
  oceanie_13 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Tuvalu (Océanie)'
    )
    RETURNING id
  ),
  oceanie_14 AS (
    INSERT INTO notes (user_id, title)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Vanuatu (Océanie)'
    )
    RETURNING id
  ),
  tag_afrique AS (
    INSERT INTO tags (user_id, label, lowercase_label)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Afrique',
      'afrique'
    )
    RETURNING id
  ),
  tag_amerique_du_nord AS (
    INSERT INTO tags (user_id, label, lowercase_label)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Amérique du Nord',
      'amérique du nord'
    )
    RETURNING id
  ),
  tag_amerique_du_sud AS (
    INSERT INTO tags (user_id, label, lowercase_label)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Amérique du Sud',
      'amérique du sud'
    )
    RETURNING id
  ),
  tag_asie AS (
    INSERT INTO tags (user_id, label, lowercase_label)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Asie',
      'asie'
    )
    RETURNING id
  ),
  tag_drapeaux_pays AS (
    INSERT INTO tags (user_id, label, lowercase_label)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Drapeaux des pays',
      'drapeaux des pays'
    )
    RETURNING id
  ),
  tag_europe AS (
    INSERT INTO tags (user_id, label, lowercase_label)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Europe',
      'europe'
    )
    RETURNING id
  ),
  tag_oceanie AS (
    INSERT INTO tags (user_id, label, lowercase_label)
    VALUES (
      (SELECT id FROM users WHERE email = 'b@b.com'),
      'Océanie',
      'océanie'
    )
    RETURNING id
  ),
  inserted_details AS (
    INSERT INTO note_details (
      note_id,
      content_position,
      content_type,
      markdown_content,
      html_content,
      file_url,
      to_be_hidden
    )
    VALUES
    (
      (SELECT id FROM afrique_01),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/afrique-du-sud.webp',
      false
    ),
    (
      (SELECT id FROM afrique_01),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_01),
      3,
      'text',
      'Afrique du Sud',
      '<p>Afrique du Sud</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_02),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/algerie.webp',
      false
    ),
    (
      (SELECT id FROM afrique_02),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_02),
      3,
      'text',
      'Algérie',
      '<p>Algérie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_03),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/angola.webp',
      false
    ),
    (
      (SELECT id FROM afrique_03),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_03),
      3,
      'text',
      'Angola',
      '<p>Angola</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_04),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/benin.webp',
      false
    ),
    (
      (SELECT id FROM afrique_04),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_04),
      3,
      'text',
      'Bénin',
      '<p>Bénin</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_05),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/botswana.webp',
      false
    ),
    (
      (SELECT id FROM afrique_05),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_05),
      3,
      'text',
      'Botswana',
      '<p>Botswana</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_06),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/burkina-faso.webp',
      false
    ),
    (
      (SELECT id FROM afrique_06),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_06),
      3,
      'text',
      'Burkina Faso',
      '<p>Burkina Faso</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_07),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/burundi.webp',
      false
    ),
    (
      (SELECT id FROM afrique_07),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_07),
      3,
      'text',
      'Burundi',
      '<p>Burundi</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_08),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/cameroun.webp',
      false
    ),
    (
      (SELECT id FROM afrique_08),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_08),
      3,
      'text',
      'Cameroun',
      '<p>Cameroun</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_09),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/cap-vert.webp',
      false
    ),
    (
      (SELECT id FROM afrique_09),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_09),
      3,
      'text',
      'Cap-Vert',
      '<p>Cap-Vert</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_10),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/comores.webp',
      false
    ),
    (
      (SELECT id FROM afrique_10),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_10),
      3,
      'text',
      'Comores',
      '<p>Comores</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_11),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/cote-d-ivoire.webp',
      false
    ),
    (
      (SELECT id FROM afrique_11),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_11),
      3,
      'text',
      'Côte d''Ivoire',
      '<p>Côte d''Ivoire</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_12),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/djibouti.webp',
      false
    ),
    (
      (SELECT id FROM afrique_12),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_12),
      3,
      'text',
      'Djibouti',
      '<p>Djibouti</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_13),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/egypte.webp',
      false
    ),
    (
      (SELECT id FROM afrique_13),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_13),
      3,
      'text',
      'Égypte',
      '<p>Égypte</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_14),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/erythree.webp',
      false
    ),
    (
      (SELECT id FROM afrique_14),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_14),
      3,
      'text',
      'Érythrée',
      '<p>Érythrée</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_15),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/eswatini.webp',
      false
    ),
    (
      (SELECT id FROM afrique_15),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_15),
      3,
      'text',
      'Eswatini',
      '<p>Eswatini</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_16),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/ethiopie.webp',
      false
    ),
    (
      (SELECT id FROM afrique_16),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_16),
      3,
      'text',
      'Éthiopie',
      '<p>Éthiopie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_17),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/gabon.webp',
      false
    ),
    (
      (SELECT id FROM afrique_17),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_17),
      3,
      'text',
      'Gabon',
      '<p>Gabon</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_18),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/gambie.webp',
      false
    ),
    (
      (SELECT id FROM afrique_18),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_18),
      3,
      'text',
      'Gambie',
      '<p>Gambie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_19),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/ghana.webp',
      false
    ),
    (
      (SELECT id FROM afrique_19),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_19),
      3,
      'text',
      'Ghana',
      '<p>Ghana</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_20),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/guinee.webp',
      false
    ),
    (
      (SELECT id FROM afrique_20),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_20),
      3,
      'text',
      'Guinée',
      '<p>Guinée</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_21),
      1,
      'image',
      null,
      null,
      '',
      false
    ),
    (
      (SELECT id FROM afrique_21),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_21),
      3,
      'text',
      'Guinée équatoriale',
      '<p>Guinée équatoriale</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_22),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/guinee-bissau.webp',
      false
    ),
    (
      (SELECT id FROM afrique_22),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_22),
      3,
      'text',
      'Guinée-Bissau',
      '<p>Guinée-Bissau</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_23),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/kenya.webp',
      false
    ),
    (
      (SELECT id FROM afrique_23),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_23),
      3,
      'text',
      'Kenya',
      '<p>Kenya</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_24),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/lesotho.webp',
      false
    ),
    (
      (SELECT id FROM afrique_24),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_24),
      3,
      'text',
      'Lesotho',
      '<p>Lesotho</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_25),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/liberia.webp',
      false
    ),
    (
      (SELECT id FROM afrique_25),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_25),
      3,
      'text',
      'Liberia',
      '<p>Liberia</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_26),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/libye.webp',
      false
    ),
    (
      (SELECT id FROM afrique_26),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_26),
      3,
      'text',
      'Libye',
      '<p>Libye</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_27),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/madagascar.webp',
      false
    ),
    (
      (SELECT id FROM afrique_27),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_27),
      3,
      'text',
      'Madagascar',
      '<p>Madagascar</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_28),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/malawi.webp',
      false
    ),
    (
      (SELECT id FROM afrique_28),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_28),
      3,
      'text',
      'Malawi',
      '<p>Malawi</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_29),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/mali.webp',
      false
    ),
    (
      (SELECT id FROM afrique_29),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_29),
      3,
      'text',
      'Mali',
      '<p>Mali</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_30),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/maroc.webp',
      false
    ),
    (
      (SELECT id FROM afrique_30),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_30),
      3,
      'text',
      'Maroc',
      '<p>Maroc</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_31),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/maurice.webp',
      false
    ),
    (
      (SELECT id FROM afrique_31),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_31),
      3,
      'text',
      'Maurice',
      '<p>Maurice</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_32),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/mauritanie.webp',
      false
    ),
    (
      (SELECT id FROM afrique_32),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_32),
      3,
      'text',
      'Mauritanie',
      '<p>Mauritanie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_33),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/mozambique.webp',
      false
    ),
    (
      (SELECT id FROM afrique_33),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_33),
      3,
      'text',
      'Mozambique',
      '<p>Mozambique</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_34),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/namibie.webp',
      false
    ),
    (
      (SELECT id FROM afrique_34),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_34),
      3,
      'text',
      'Namibie',
      '<p>Namibie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_35),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/niger.webp',
      false
    ),
    (
      (SELECT id FROM afrique_35),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_35),
      3,
      'text',
      'Niger',
      '<p>Niger</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_36),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/nigeria.webp',
      false
    ),
    (
      (SELECT id FROM afrique_36),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_36),
      3,
      'text',
      'Nigeria',
      '<p>Nigeria</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_37),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/ouganda.webp',
      false
    ),
    (
      (SELECT id FROM afrique_37),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_37),
      3,
      'text',
      'Ouganda',
      '<p>Ouganda</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_38),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/republique-centrafricaine.webp',
      false
    ),
    (
      (SELECT id FROM afrique_38),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_38),
      3,
      'text',
      'République centrafricaine',
      '<p>République centrafricaine</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_39),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/republique-democratique-du-congo.webp',
      false
    ),
    (
      (SELECT id FROM afrique_39),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_39),
      3,
      'text',
      'République démocratique du Congo',
      '<p>République démocratique du Congo</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_40),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/republique-du-congo.webp',
      false
    ),
    (
      (SELECT id FROM afrique_40),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_40),
      3,
      'text',
      'République du Congo',
      '<p>République du Congo</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_41),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/rwanda.webp',
      false
    ),
    (
      (SELECT id FROM afrique_41),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_41),
      3,
      'text',
      'Rwanda',
      '<p>Rwanda</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_42),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/sao-tome-et-principe.webp',
      false
    ),
    (
      (SELECT id FROM afrique_42),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_42),
      3,
      'text',
      'Sao Tomé-et-Principe',
      '<p>Sao Tomé-et-Principe</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_43),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/senegal.webp',
      false
    ),
    (
      (SELECT id FROM afrique_43),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_43),
      3,
      'text',
      'Sénégal',
      '<p>Sénégal</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_44),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/seychelles.webp',
      false
    ),
    (
      (SELECT id FROM afrique_44),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_44),
      3,
      'text',
      'Seychelles',
      '<p>Seychelles</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_45),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/sierra-leone.webp',
      false
    ),
    (
      (SELECT id FROM afrique_45),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_45),
      3,
      'text',
      'Sierra Leone',
      '<p>Sierra Leone</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_46),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/somalie.webp',
      false
    ),
    (
      (SELECT id FROM afrique_46),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_46),
      3,
      'text',
      'Somalie',
      '<p>Somalie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_47),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/soudan.webp',
      false
    ),
    (
      (SELECT id FROM afrique_47),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_47),
      3,
      'text',
      'Soudan',
      '<p>Soudan</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_48),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/soudan-du-sud.webp',
      false
    ),
    (
      (SELECT id FROM afrique_48),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_48),
      3,
      'text',
      'Soudan du Sud',
      '<p>Soudan du Sud</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_49),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/tanzanie.webp',
      false
    ),
    (
      (SELECT id FROM afrique_49),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_49),
      3,
      'text',
      'Tanzanie',
      '<p>Tanzanie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_50),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/tchad.webp',
      false
    ),
    (
      (SELECT id FROM afrique_50),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_50),
      3,
      'text',
      'Tchad',
      '<p>Tchad</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_51),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/togo.webp',
      false
    ),
    (
      (SELECT id FROM afrique_51),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_51),
      3,
      'text',
      'Togo',
      '<p>Togo</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_52),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/tunisie.webp',
      false
    ),
    (
      (SELECT id FROM afrique_52),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_52),
      3,
      'text',
      'Tunisie',
      '<p>Tunisie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_53),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/zambie.webp',
      false
    ),
    (
      (SELECT id FROM afrique_53),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_53),
      3,
      'text',
      'Zambie',
      '<p>Zambie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM afrique_54),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/zimbabwe.webp',
      false
    ),
    (
      (SELECT id FROM afrique_54),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM afrique_54),
      3,
      'text',
      'Zimbabwe',
      '<p>Zimbabwe</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_01),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/antigua-et-barbuda.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_01),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_01),
      3,
      'text',
      'Antigua-et-Barbuda',
      '<p>Antigua-et-Barbuda</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_02),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/bahamas.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_02),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_02),
      3,
      'text',
      'Bahamas',
      '<p>Bahamas</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_03),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/barbade.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_03),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_03),
      3,
      'text',
      'Barbade',
      '<p>Barbade</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_04),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/belize.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_04),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_04),
      3,
      'text',
      'Belize',
      '<p>Belize</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_05),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/canada.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_05),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_05),
      3,
      'text',
      'Canada',
      '<p>Canada</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_06),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/costa-rica.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_06),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_06),
      3,
      'text',
      'Costa Rica',
      '<p>Costa Rica</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_07),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/cuba.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_07),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_07),
      3,
      'text',
      'Cuba',
      '<p>Cuba</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_08),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/dominique.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_08),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_08),
      3,
      'text',
      'Dominique',
      '<p>Dominique</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_09),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/etats-unis.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_09),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_09),
      3,
      'text',
      'États-Unis',
      '<p>États-Unis</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_10),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/grenade.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_10),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_10),
      3,
      'text',
      'Grenade',
      '<p>Grenade</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_11),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/guatemala.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_11),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_11),
      3,
      'text',
      'Guatemala',
      '<p>Guatemala</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_12),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/haiti.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_12),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_12),
      3,
      'text',
      'Haïti',
      '<p>Haïti</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_13),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/honduras.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_13),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_13),
      3,
      'text',
      'Honduras',
      '<p>Honduras</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_14),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/jamaique.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_14),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_14),
      3,
      'text',
      'Jamaïque',
      '<p>Jamaïque</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_15),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/mexique.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_15),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_15),
      3,
      'text',
      'Mexique',
      '<p>Mexique</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_16),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/nicaragua.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_16),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_16),
      3,
      'text',
      'Nicaragua',
      '<p>Nicaragua</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_17),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/panama.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_17),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_17),
      3,
      'text',
      'Panama',
      '<p>Panama</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_18),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/republique-dominicaine.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_18),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_18),
      3,
      'text',
      'République dominicaine',
      '<p>République dominicaine</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_19),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/Saint-kitts-et-nevis.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_19),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_19),
      3,
      'text',
      'Saint-Kitts-et-Nevis, Saint-Christophe-et-Niévès, ou Saint-Christophe-et-Nevis',
      '<p>Saint-Kitts-et-Nevis, Saint-Christophe-et-Niévès, ou Saint-Christophe-et-Nevis</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_20),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/saint-vincent-et-les-grenadines.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_20),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_20),
      3,
      'text',
      'Saint-Vincent-et-les-Grenadines',
      '<p>Saint-Vincent-et-les-Grenadines</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_21),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/sainte-lucie.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_21),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_21),
      3,
      'text',
      'Sainte-Lucie',
      '<p>Sainte-Lucie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_22),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/salvador.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_22),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_22),
      3,
      'text',
      'Salvador',
      '<p>Salvador</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_nord_23),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/trinite-et-tobago.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_23),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_nord_23),
      3,
      'text',
      'Trinité-et-Tobago',
      '<p>Trinité-et-Tobago</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_sud_01),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/argentine.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_01),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_01),
      3,
      'text',
      'Argentine',
      '<p>Argentine</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_sud_02),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/bolivie.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_02),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_02),
      3,
      'text',
      'Bolivie',
      '<p>Bolivie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_sud_03),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/bresil.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_03),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_03),
      3,
      'text',
      'Brésil',
      '<p>Brésil</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_sud_04),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/chili.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_04),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_04),
      3,
      'text',
      'Chili',
      '<p>Chili</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_sud_05),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/colombie.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_05),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_05),
      3,
      'text',
      'Colombie',
      '<p>Colombie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_sud_06),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/equateur.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_06),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_06),
      3,
      'text',
      'Équateur',
      '<p>Équateur</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_sud_07),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/guyana.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_07),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_07),
      3,
      'text',
      'Guyana',
      '<p>Guyana</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_sud_08),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/paraguay.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_08),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_08),
      3,
      'text',
      'Paraguay',
      '<p>Paraguay</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_sud_09),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/perou.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_09),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_09),
      3,
      'text',
      'Pérou',
      '<p>Pérou</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_sud_10),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/suriname.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_10),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_10),
      3,
      'text',
      'Suriname',
      '<p>Suriname</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_sud_11),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/uruguay.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_11),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_11),
      3,
      'text',
      'Uruguay',
      '<p>Uruguay</p>',
      null,
      true
    ),
    (
      (SELECT id FROM amerique_du_sud_12),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/venezuela.webp',
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_12),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM amerique_du_sud_12),
      3,
      'text',
      'Venezuela',
      '<p>Venezuela</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_01),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/afghanistan.webp',
      false
    ),
    (
      (SELECT id FROM asie_01),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_01),
      3,
      'text',
      'Afghanistan',
      '<p>Afghanistan</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_02),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/arabie-saoudite.webp',
      false
    ),
    (
      (SELECT id FROM asie_02),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_02),
      3,
      'text',
      'Arabie saoudite',
      '<p>Arabie saoudite</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_03),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/armenie.webp',
      false
    ),
    (
      (SELECT id FROM asie_03),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_03),
      3,
      'text',
      'Arménie',
      '<p>Arménie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_04),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/azerbaidjan.webp',
      false
    ),
    (
      (SELECT id FROM asie_04),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_04),
      3,
      'text',
      'Azerbaïdjan',
      '<p>Azerbaïdjan</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_05),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/bahrein.webp',
      false
    ),
    (
      (SELECT id FROM asie_05),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_05),
      3,
      'text',
      'Bahreïn',
      '<p>Bahreïn</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_06),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/bangladesh.webp',
      false
    ),
    (
      (SELECT id FROM asie_06),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_06),
      3,
      'text',
      'Bangladesh',
      '<p>Bangladesh</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_07),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/bhoutan.webp',
      false
    ),
    (
      (SELECT id FROM asie_07),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_07),
      3,
      'text',
      'Bhoutan',
      '<p>Bhoutan</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_08),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/birmanie.webp',
      false
    ),
    (
      (SELECT id FROM asie_08),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_08),
      3,
      'text',
      'Birmanie',
      '<p>Birmanie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_09),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/brunei.webp',
      false
    ),
    (
      (SELECT id FROM asie_09),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_09),
      3,
      'text',
      'Brunei',
      '<p>Brunei</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_10),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/cambodge.webp',
      false
    ),
    (
      (SELECT id FROM asie_10),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_10),
      3,
      'text',
      'Cambodge',
      '<p>Cambodge</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_11),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/chine.webp',
      false
    ),
    (
      (SELECT id FROM asie_11),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_11),
      3,
      'text',
      'Chine',
      '<p>Chine</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_12),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/coree-du-nord.webp',
      false
    ),
    (
      (SELECT id FROM asie_12),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_12),
      3,
      'text',
      'Corée du Nord',
      '<p>Corée du Nord</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_13),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/coree-du-sud.webp',
      false
    ),
    (
      (SELECT id FROM asie_13),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_13),
      3,
      'text',
      'Corée du Sud',
      '<p>Corée du Sud</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_14),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/emirats-arabes-unis.webp',
      false
    ),
    (
      (SELECT id FROM asie_14),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_14),
      3,
      'text',
      'Émirats arabes unis',
      '<p>Émirats arabes unis</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_15),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/georgie.webp',
      false
    ),
    (
      (SELECT id FROM asie_15),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_15),
      3,
      'text',
      'Géorgie',
      '<p>Géorgie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_16),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/inde.webp',
      false
    ),
    (
      (SELECT id FROM asie_16),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_16),
      3,
      'text',
      'Inde',
      '<p>Inde</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_17),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/indonesie.webp',
      false
    ),
    (
      (SELECT id FROM asie_17),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_17),
      3,
      'text',
      'Indonésie',
      '<p>Indonésie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_18),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/irak.webp',
      false
    ),
    (
      (SELECT id FROM asie_18),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_18),
      3,
      'text',
      'Irak',
      '<p>Irak</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_19),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/iran.webp',
      false
    ),
    (
      (SELECT id FROM asie_19),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_19),
      3,
      'text',
      'Iran',
      '<p>Iran</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_20),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/israel.webp',
      false
    ),
    (
      (SELECT id FROM asie_20),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_20),
      3,
      'text',
      'Israël',
      '<p>Israël</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_21),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/japon.webp',
      false
    ),
    (
      (SELECT id FROM asie_21),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_21),
      3,
      'text',
      'Japon',
      '<p>Japon</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_22),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/jordanie.webp',
      false
    ),
    (
      (SELECT id FROM asie_22),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_22),
      3,
      'text',
      'Jordanie',
      '<p>Jordanie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_23),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/kazakhstan.webp',
      false
    ),
    (
      (SELECT id FROM asie_23),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_23),
      3,
      'text',
      'Kazakhstan',
      '<p>Kazakhstan</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_24),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/kirghizistan.webp',
      false
    ),
    (
      (SELECT id FROM asie_24),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_24),
      3,
      'text',
      'Kirghizistan',
      '<p>Kirghizistan</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_25),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/koweit.webp',
      false
    ),
    (
      (SELECT id FROM asie_25),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_25),
      3,
      'text',
      'Koweït',
      '<p>Koweït</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_26),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/laos.webp',
      false
    ),
    (
      (SELECT id FROM asie_26),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_26),
      3,
      'text',
      'Laos',
      '<p>Laos</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_27),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/liban.webp',
      false
    ),
    (
      (SELECT id FROM asie_27),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_27),
      3,
      'text',
      'Liban',
      '<p>Liban</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_28),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/malaisie.webp',
      false
    ),
    (
      (SELECT id FROM asie_28),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_28),
      3,
      'text',
      'Malaisie',
      '<p>Malaisie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_29),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/maldives.webp',
      false
    ),
    (
      (SELECT id FROM asie_29),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_29),
      3,
      'text',
      'Maldives',
      '<p>Maldives</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_30),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/mongolie.webp',
      false
    ),
    (
      (SELECT id FROM asie_30),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_30),
      3,
      'text',
      'Mongolie',
      '<p>Mongolie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_31),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/nepal.webp',
      false
    ),
    (
      (SELECT id FROM asie_31),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_31),
      3,
      'text',
      'Népal',
      '<p>Népal</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_32),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/oman.webp',
      false
    ),
    (
      (SELECT id FROM asie_32),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_32),
      3,
      'text',
      'Oman',
      '<p>Oman</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_33),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/ouzbekistan.webp',
      false
    ),
    (
      (SELECT id FROM asie_33),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_33),
      3,
      'text',
      'Ouzbékistan',
      '<p>Ouzbékistan</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_34),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/pakistan.webp',
      false
    ),
    (
      (SELECT id FROM asie_34),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_34),
      3,
      'text',
      'Pakistan',
      '<p>Pakistan</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_35),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/philippines.webp',
      false
    ),
    (
      (SELECT id FROM asie_35),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_35),
      3,
      'text',
      'Philippines',
      '<p>Philippines</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_36),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/qatar.webp',
      false
    ),
    (
      (SELECT id FROM asie_36),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_36),
      3,
      'text',
      'Qatar',
      '<p>Qatar</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_37),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/singapour.webp',
      false
    ),
    (
      (SELECT id FROM asie_37),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_37),
      3,
      'text',
      'Singapour',
      '<p>Singapour</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_38),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/sri-lanka.webp',
      false
    ),
    (
      (SELECT id FROM asie_38),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_38),
      3,
      'text',
      'Sri Lanka',
      '<p>Sri Lanka</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_39),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/syrie.webp',
      false
    ),
    (
      (SELECT id FROM asie_39),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_39),
      3,
      'text',
      'Syrie',
      '<p>Syrie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_40),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/tadjikistan.webp',
      false
    ),
    (
      (SELECT id FROM asie_40),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_40),
      3,
      'text',
      'Tadjikistan',
      '<p>Tadjikistan</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_41),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/thailande.webp',
      false
    ),
    (
      (SELECT id FROM asie_41),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_41),
      3,
      'text',
      'Thaïlande',
      '<p>Thaïlande</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_42),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/timor-oriental.webp',
      false
    ),
    (
      (SELECT id FROM asie_42),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_42),
      3,
      'text',
      'Timor oriental',
      '<p>Timor oriental</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_43),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/turkmenistan.webp',
      false
    ),
    (
      (SELECT id FROM asie_43),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_43),
      3,
      'text',
      'Turkménistan',
      '<p>Turkménistan</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_44),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/turquie.webp',
      false
    ),
    (
      (SELECT id FROM asie_44),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_44),
      3,
      'text',
      'Turquie',
      '<p>Turquie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_45),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/viet-nam.webp',
      false
    ),
    (
      (SELECT id FROM asie_45),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_45),
      3,
      'text',
      'Viêt Nam, Viet Nam ou Vietnam',
      '<p>Viêt Nam, Viet Nam ou Vietnam</p>',
      null,
      true
    ),
    (
      (SELECT id FROM asie_46),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/yemen.webp',
      false
    ),
    (
      (SELECT id FROM asie_46),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM asie_46),
      3,
      'text',
      'Yémen',
      '<p>Yémen</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_01),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/albanie.webp',
      false
    ),
    (
      (SELECT id FROM europe_01),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_01),
      3,
      'text',
      'Albanie',
      '<p>Albanie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_02),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/allemagne.webp',
      false
    ),
    (
      (SELECT id FROM europe_02),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_02),
      3,
      'text',
      'Allemagne',
      '<p>Allemagne</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_03),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/andorre.webp',
      false
    ),
    (
      (SELECT id FROM europe_03),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_03),
      3,
      'text',
      'Andorre',
      '<p>Andorre</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_04),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/autriche.webp',
      false
    ),
    (
      (SELECT id FROM europe_04),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_04),
      3,
      'text',
      'Autriche',
      '<p>Autriche</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_05),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/belgique.webp',
      false
    ),
    (
      (SELECT id FROM europe_05),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_05),
      3,
      'text',
      'Belgique',
      '<p>Belgique</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_06),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/bielorussie.webp',
      false
    ),
    (
      (SELECT id FROM europe_06),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_06),
      3,
      'text',
      'Biélorussie',
      '<p>Biélorussie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_07),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/bosnie-herzegovine.webp',
      false
    ),
    (
      (SELECT id FROM europe_07),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_07),
      3,
      'text',
      'Bosnie-Herzégovine',
      '<p>Bosnie-Herzégovine</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_08),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/bulgarie.webp',
      false
    ),
    (
      (SELECT id FROM europe_08),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_08),
      3,
      'text',
      'Bulgarie',
      '<p>Bulgarie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_09),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/chypre.webp',
      false
    ),
    (
      (SELECT id FROM europe_09),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_09),
      3,
      'text',
      'Chypre',
      '<p>Chypre</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_10),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/croatie.webp',
      false
    ),
    (
      (SELECT id FROM europe_10),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_10),
      3,
      'text',
      'Croatie',
      '<p>Croatie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_11),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/danemark.webp',
      false
    ),
    (
      (SELECT id FROM europe_11),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_11),
      3,
      'text',
      'Danemark',
      '<p>Danemark</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_12),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/espagne.webp',
      false
    ),
    (
      (SELECT id FROM europe_12),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_12),
      3,
      'text',
      'Espagne',
      '<p>Espagne</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_13),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/estonie.webp',
      false
    ),
    (
      (SELECT id FROM europe_13),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_13),
      3,
      'text',
      'Estonie',
      '<p>Estonie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_14),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/finlande.webp',
      false
    ),
    (
      (SELECT id FROM europe_14),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_14),
      3,
      'text',
      'Finlande',
      '<p>Finlande</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_15),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/france.webp',
      false
    ),
    (
      (SELECT id FROM europe_15),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_15),
      3,
      'text',
      'France',
      '<p>France</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_16),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/grece.webp',
      false
    ),
    (
      (SELECT id FROM europe_16),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_16),
      3,
      'text',
      'Grèce',
      '<p>Grèce</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_17),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/hongrie.webp',
      false
    ),
    (
      (SELECT id FROM europe_17),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_17),
      3,
      'text',
      'Hongrie',
      '<p>Hongrie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_18),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/irlande.webp',
      false
    ),
    (
      (SELECT id FROM europe_18),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_18),
      3,
      'text',
      'Irlande',
      '<p>Irlande</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_19),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/islande.webp',
      false
    ),
    (
      (SELECT id FROM europe_19),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_19),
      3,
      'text',
      'Islande',
      '<p>Islande</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_20),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/italie.webp',
      false
    ),
    (
      (SELECT id FROM europe_20),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_20),
      3,
      'text',
      'Italie',
      '<p>Italie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_21),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/lettonie.webp',
      false
    ),
    (
      (SELECT id FROM europe_21),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_21),
      3,
      'text',
      'Lettonie',
      '<p>Lettonie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_22),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/liechtenstein.webp',
      false
    ),
    (
      (SELECT id FROM europe_22),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_22),
      3,
      'text',
      'Liechtenstein',
      '<p>Liechtenstein</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_23),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/lituanie.webp',
      false
    ),
    (
      (SELECT id FROM europe_23),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_23),
      3,
      'text',
      'Lituanie',
      '<p>Lituanie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_24),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/luxembourg.webp',
      false
    ),
    (
      (SELECT id FROM europe_24),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_24),
      3,
      'text',
      'Luxembourg',
      '<p>Luxembourg</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_25),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/macedoine-du-nord.webp',
      false
    ),
    (
      (SELECT id FROM europe_25),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_25),
      3,
      'text',
      'Macédoine du Nord',
      '<p>Macédoine du Nord</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_26),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/malte.webp',
      false
    ),
    (
      (SELECT id FROM europe_26),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_26),
      3,
      'text',
      'Malte',
      '<p>Malte</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_27),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/moldavie.webp',
      false
    ),
    (
      (SELECT id FROM europe_27),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_27),
      3,
      'text',
      'Moldavie',
      '<p>Moldavie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_28),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/monaco.webp',
      false
    ),
    (
      (SELECT id FROM europe_28),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_28),
      3,
      'text',
      'Monaco',
      '<p>Monaco</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_29),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/montenegro.webp',
      false
    ),
    (
      (SELECT id FROM europe_29),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_29),
      3,
      'text',
      'Monténégro',
      '<p>Monténégro</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_30),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/norvege.webp',
      false
    ),
    (
      (SELECT id FROM europe_30),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_30),
      3,
      'text',
      'Norvège',
      '<p>Norvège</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_31),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/pays-bas.webp',
      false
    ),
    (
      (SELECT id FROM europe_31),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_31),
      3,
      'text',
      'Pays-Bas',
      '<p>Pays-Bas</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_32),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/pologne.webp',
      false
    ),
    (
      (SELECT id FROM europe_32),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_32),
      3,
      'text',
      'Pologne',
      '<p>Pologne</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_33),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/portugal.webp',
      false
    ),
    (
      (SELECT id FROM europe_33),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_33),
      3,
      'text',
      'Portugal',
      '<p>Portugal</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_34),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/roumanie.webp',
      false
    ),
    (
      (SELECT id FROM europe_34),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_34),
      3,
      'text',
      'Roumanie',
      '<p>Roumanie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_35),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/royaume-uni.webp',
      false
    ),
    (
      (SELECT id FROM europe_35),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_35),
      3,
      'text',
      'Royaume-Uni',
      '<p>Royaume-Uni</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_36),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/russie.webp',
      false
    ),
    (
      (SELECT id FROM europe_36),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_36),
      3,
      'text',
      'Russie',
      '<p>Russie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_37),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/saint-marin.webp',
      false
    ),
    (
      (SELECT id FROM europe_37),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_37),
      3,
      'text',
      'Saint-Marin',
      '<p>Saint-Marin</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_38),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/serbie.webp',
      false
    ),
    (
      (SELECT id FROM europe_38),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_38),
      3,
      'text',
      'Serbie',
      '<p>Serbie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_39),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/slovaquie.webp',
      false
    ),
    (
      (SELECT id FROM europe_39),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_39),
      3,
      'text',
      'Slovaquie',
      '<p>Slovaquie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_40),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/slovenie.webp',
      false
    ),
    (
      (SELECT id FROM europe_40),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_40),
      3,
      'text',
      'Slovénie',
      '<p>Slovénie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_41),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/suede.webp',
      false
    ),
    (
      (SELECT id FROM europe_41),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_41),
      3,
      'text',
      'Suède',
      '<p>Suède</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_42),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/suisse.webp',
      false
    ),
    (
      (SELECT id FROM europe_42),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_42),
      3,
      'text',
      'Suisse',
      '<p>Suisse</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_43),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/tchequie-republique-tcheque.webp',
      false
    ),
    (
      (SELECT id FROM europe_43),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_43),
      3,
      'text',
      'Tchéquie (République tchèque)',
      '<p>Tchéquie (République tchèque)</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_44),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/ukraine.webp',
      false
    ),
    (
      (SELECT id FROM europe_44),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_44),
      3,
      'text',
      'Ukraine',
      '<p>Ukraine</p>',
      null,
      true
    ),
    (
      (SELECT id FROM europe_45),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/vatican.webp',
      false
    ),
    (
      (SELECT id FROM europe_45),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM europe_45),
      3,
      'text',
      'Vatican',
      '<p>Vatican</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_01),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/australie.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_01),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_01),
      3,
      'text',
      'Australie',
      '<p>Australie</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_02),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/etats-federes-de-micronesie.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_02),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_02),
      3,
      'text',
      'Etats fédérés de Micronésie (Océanie)',
      '<p>Etats fédérés de Micronésie (Océanie)</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_03),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/fidji.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_03),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_03),
      3,
      'text',
      'Fidji (Océanie)',
      '<p>Fidji (Océanie)</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_04),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/iles-marshall.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_04),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_04),
      3,
      'text',
      'Iles Marshall (Océanie)',
      '<p>Iles Marshall (Océanie)</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_05),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/iles-salomon.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_05),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_05),
      3,
      'text',
      'Iles Salomon (Océanie)',
      '<p>Iles Salomon (Océanie)</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_06),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/kitibati.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_06),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_06),
      3,
      'text',
      'Kitibati (Océanie)',
      '<p>Kitibati (Océanie)</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_07),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/nauru.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_07),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_07),
      3,
      'text',
      'Nauru (Océanie)',
      '<p>Nauru (Océanie)</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_08),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/nouvelle-zelande.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_08),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_08),
      3,
      'text',
      'Nouvelle-Zélande (Océanie)',
      '<p>Nouvelle-Zélande (Océanie)</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_09),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/palaos.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_09),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_09),
      3,
      'text',
      'Palaos (Océanie)',
      '<p>Palaos (Océanie)</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_10),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/papouasie-nouvelle-guinee.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_10),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_10),
      3,
      'text',
      'Papouasie-Nouvelle-Guinée (Océanie)',
      '<p>Papouasie-Nouvelle-Guinée (Océanie)</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_11),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/samoa.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_11),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_11),
      3,
      'text',
      'Samoa (Océanie)',
      '<p>Samoa (Océanie)</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_12),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/tonga.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_12),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_12),
      3,
      'text',
      'Tonga (Océanie)',
      '<p>Tonga (Océanie)</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_13),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/tuvalu.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_13),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_13),
      3,
      'text',
      'Tuvalu (Océanie)',
      '<p>Tuvalu (Océanie)</p>',
      null,
      true
    ),
    (
      (SELECT id FROM oceanie_14),
      1,
      'image',
      null,
      null,
      'https://f003.backblazeb2.com/file/notyloops/vanuatu.webp',
      false
    ),
    (
      (SELECT id FROM oceanie_14),
      2,
      'text',
      'A quel pays appartient le drapeau ci-dessus ?',
      '<p>A quel pays appartient le drapeau ci-dessus ?</p>',
      null,
      false
    ),
    (
      (SELECT id FROM oceanie_14),
      3,
      'text',
      'Vanuatu (Océanie)',
      '<p>Vanuatu (Océanie)</p>',
      null,
      true
    )
  )
INSERT INTO note_tags (user_id, note_id, tag_id)
SELECT
  (SELECT id FROM users WHERE email = 'b@b.com'),
  n.id,
  n.tag_id
FROM (
  SELECT id, (SELECT id FROM tag_afrique) AS tag_id FROM afrique_01
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_02
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_03
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_04
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_05
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_06
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_07
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_08
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_09
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_10
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_11
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_12
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_13
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_14
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_15
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_16
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_17
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_18
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_19
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_20
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_21
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_22
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_23
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_24
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_25
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_26
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_27
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_28
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_29
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_30
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_31
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_32
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_33
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_34
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_35
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_36
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_37
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_38
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_39
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_40
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_41
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_42
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_43
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_44
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_45
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_46
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_47
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_48
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_49
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_50
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_51
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_52
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_53
  UNION ALL SELECT id, (SELECT id FROM tag_afrique) FROM afrique_54
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_01
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_02
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_03
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_04
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_05
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_06
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_07
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_08
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_09
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_10
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_11
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_12
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_13
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_14
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_15
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_16
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_17
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_18
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_19
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_20
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_21
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_22
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_nord) FROM amerique_du_nord_23
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_sud) FROM amerique_du_sud_01
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_sud) FROM amerique_du_sud_02
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_sud) FROM amerique_du_sud_03
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_sud) FROM amerique_du_sud_04
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_sud) FROM amerique_du_sud_05
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_sud) FROM amerique_du_sud_06
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_sud) FROM amerique_du_sud_07
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_sud) FROM amerique_du_sud_08
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_sud) FROM amerique_du_sud_09
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_sud) FROM amerique_du_sud_10
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_sud) FROM amerique_du_sud_11
  UNION ALL SELECT id, (SELECT id FROM tag_amerique_du_sud) FROM amerique_du_sud_12
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_01
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_02
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_03
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_04
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_05
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_06
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_07
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_08
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_09
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_10
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_11
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_12
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_13
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_14
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_15
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_16
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_17
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_18
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_19
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_20
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_21
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_22
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_23
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_24
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_25
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_26
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_27
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_28
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_29
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_30
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_31
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_32
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_33
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_34
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_35
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_36
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_37
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_38
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_39
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_40
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_41
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_42
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_43
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_44
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_45
  UNION ALL SELECT id, (SELECT id FROM tag_asie) FROM asie_46
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_01
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_02
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_03
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_04
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_05
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_06
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_07
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_08
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_09
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_10
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_11
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_12
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_13
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_14
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_15
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_16
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_17
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_18
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_19
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_20
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_21
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_22
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_23
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_24
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_25
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_26
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_27
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_28
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_29
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_30
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_31
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_32
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_33
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_34
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_35
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_36
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_37
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_38
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_39
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_40
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_41
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_42
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_43
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_44
  UNION ALL SELECT id, (SELECT id FROM tag_europe) FROM europe_45
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_01
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_02
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_03
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_04
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_05
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_06
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_07
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_08
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_09
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_10
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_11
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_12
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_13
  UNION ALL SELECT id, (SELECT id FROM tag_oceanie) FROM oceanie_14
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_01
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_02
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_03
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_04
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_05
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_06
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_07
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_08
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_09
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_10
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_11
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_12
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_13
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_14
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_15
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_16
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_17
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_18
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_19
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_20
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_21
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_22
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_23
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_24
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_25
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_26
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_27
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_28
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_29
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_30
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_31
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_32
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_33
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_34
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_35
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_36
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_37
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_38
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_39
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_40
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_41
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_42
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_43
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_44
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_45
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_46
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_47
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_48
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_49
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_50
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_51
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_52
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_53
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM afrique_54
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_01
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_02
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_03
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_04
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_05
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_06
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_07
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_08
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_09
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_10
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_11
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_12
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_13
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_14
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_15
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_16
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_17
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_18
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_19
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_20
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_21
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_22
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_nord_23
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_sud_01
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_sud_02
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_sud_03
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_sud_04
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_sud_05
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_sud_06
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_sud_07
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_sud_08
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_sud_09
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_sud_10
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_sud_11
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM amerique_du_sud_12
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_01
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_02
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_03
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_04
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_05
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_06
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_07
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_08
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_09
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_10
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_11
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_12
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_13
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_14
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_15
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_16
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_17
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_18
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_19
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_20
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_21
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_22
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_23
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_24
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_25
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_26
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_27
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_28
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_29
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_30
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_31
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_32
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_33
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_34
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_35
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_36
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_37
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_38
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_39
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_40
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_41
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_42
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_43
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_44
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_45
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM asie_46
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_01
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_02
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_03
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_04
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_05
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_06
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_07
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_08
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_09
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_10
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_11
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_12
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_13
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_14
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_15
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_16
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_17
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_18
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_19
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_20
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_21
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_22
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_23
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_24
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_25
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_26
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_27
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_28
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_29
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_30
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_31
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_32
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_33
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_34
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_35
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_36
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_37
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_38
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_39
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_40
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_41
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_42
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_43
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_44
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM europe_45
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_01
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_02
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_03
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_04
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_05
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_06
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_07
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_08
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_09
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_10
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_11
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_12
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_13
  UNION ALL SELECT id, (SELECT id FROM tag_drapeaux_pays) FROM oceanie_14
) n;

-- =============================================
-- Collections publiques gratuites (une par continent tagué dans les seeds)
-- =============================================
INSERT INTO collections (
  user_id,
  type,
  title,
  description,
  tag_id_list_to_include,
  inclusion_type,
  tag_id_list_to_exclude,
  exclusion_type,
  review_strategy,
  price_without_tax,
  stripe_payment_link_id,
  slug
)
VALUES
(
  (SELECT id FROM users WHERE email = 'b@b.com'),
  'public_free',
  'Drapeaux des pays d''Afrique',
  'Quiz sur les drapeaux des pays d''Afrique.',
  (
    SELECT jsonb_build_array(id)
    FROM tags
    WHERE user_id = (SELECT id FROM users WHERE email = 'b@b.com')
      AND label = 'Afrique'
    LIMIT 1
  ),
  'AND',
  '[]'::jsonb,
  'AND',
  'random',
  NULL,
  NULL,
  'drapeaux-pays-afrique'
),
(
  (SELECT id FROM users WHERE email = 'b@b.com'),
  'public_free',
  'Drapeaux des pays d''Amérique du Nord',
  'Quiz sur les drapeaux des pays d''Amérique du Nord',
  (
    SELECT jsonb_build_array(id)
    FROM tags
    WHERE user_id = (SELECT id FROM users WHERE email = 'b@b.com')
      AND label = 'Amérique du Nord'
    LIMIT 1
  ),
  'AND',
  '[]'::jsonb,
  'AND',
  'random',
  NULL,
  NULL,
  'drapeaux-pays-amerique-du-nord'
),
(
  (SELECT id FROM users WHERE email = 'b@b.com'),
  'public_free',
  'Drapeaux des pays d''Amérique du Sud',
  'Quiz sur les drapeaux des pays d''Amérique du Sud',
  (
    SELECT jsonb_build_array(id)
    FROM tags
    WHERE user_id = (SELECT id FROM users WHERE email = 'b@b.com')
      AND label = 'Amérique du Sud'
    LIMIT 1
  ),
  'AND',
  '[]'::jsonb,
  'AND',
  'random',
  NULL,
  NULL,
  'drapeaux-pays-amerique-du-sud'
),
(
  (SELECT id FROM users WHERE email = 'b@b.com'),
  'public_paywalled',
  'Drapeaux des pays d''Asie',
  'Quiz sur les drapeaux des pays d''Asie',
  (
    SELECT jsonb_build_array(id)
    FROM tags
    WHERE user_id = (SELECT id FROM users WHERE email = 'b@b.com')
      AND label = 'Asie'
    LIMIT 1
  ),
  'AND',
  '[]'::jsonb,
  'AND',
  'random',
  5,
  'test_fZu00j1qS3ogaVW4efc3m01',
  'drapeaux-pays-asie'
),
(
  (SELECT id FROM users WHERE email = 'b@b.com'),
  'public_free',
  'Drapeaux des pays d''Europe',
  'Quiz sur les drapeaux des pays d''Europe',
  (
    SELECT jsonb_build_array(id)
    FROM tags
    WHERE user_id = (SELECT id FROM users WHERE email = 'b@b.com')
      AND label = 'Europe'
    LIMIT 1
  ),
  'AND',
  '[]'::jsonb,
  'AND',
  'random',
  NULL,
  NULL,
  'drapeaux-pays-europe'
),
(
  (SELECT id FROM users WHERE email = 'b@b.com'),
  'public_free',
  'Drapeaux des pays d''Océanie',
  'Quiz sur les drapeaux des pays d''Océanie',
  (
    SELECT jsonb_build_array(id)
    FROM tags
    WHERE user_id = (SELECT id FROM users WHERE email = 'b@b.com')
      AND label = 'Océanie'
    LIMIT 1
  ),
  'AND',
  '[]'::jsonb,
  'AND',
  'random',
  NULL,
  NULL,
  NULL
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
  'premium',
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
  'premium',
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
  'premium',
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
  'premium',
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
  'premium',
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
  'premium',
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
  'premium',
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
  'premium',
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
  'premium',
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
  'premium',
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
  'premium',
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
