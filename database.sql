CREATE TABLE "user" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"auth" int(1) NOT NULL DEFAULT '1',
	CONSTRAINT "user_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "opportunity" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"image_url" varchar(255),
	"description" varchar(255) NOT NULL,
	"contact" varchar(255),
	"email" varchar(255),
	"phone" varchar(15),
	"web_address" varchar(255),
	"social" varchar(255),
	"street_address" varchar(255),
	"city" varchar(50),
	"zip" varchar(50),
	"date_added" varchar(50),
	CONSTRAINT "opportunity_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "user_opportunity" (
	"user_id" int NOT NULL,
	"opportunity_id" int NOT NULL,
	"review" varchar(255),
	CONSTRAINT "user_opportunity_pk" PRIMARY KEY ("user_id","opportunity_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "keyword" (
	"id" serial NOT NULL,
	"tag" serial(255) NOT NULL,
	CONSTRAINT "keyword_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "opportunity_keyword" (
	"id" serial NOT NULL,
	"opportuity_id" int NOT NULL,
	"keyword_id" int NOT NULL,
	CONSTRAINT "opportunity_keyword_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "user_opportunity" ADD CONSTRAINT "user_opportunity_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "user_opportunity" ADD CONSTRAINT "user_opportunity_fk1" FOREIGN KEY ("opportunity_id") REFERENCES "opportunity"("id");

ALTER TABLE "opportunity_keyword" ADD CONSTRAINT "opportunity_keyword_fk0" FOREIGN KEY ("opportuity_id") REFERENCES "opportunity"("id");
ALTER TABLE "opportunity_keyword" ADD CONSTRAINT "opportunity_keyword_fk1" FOREIGN KEY ("keyword_id") REFERENCES "keyword"("id");

INSERT INTO "public"."opportunity"("name", "image_url", "description", "contact", "email", "phone", "web_address", "social", "street_address", "city", "zip")
VALUES(
'Surly Gives a Damn', 
'https://pbs.twimg.com/profile_images/867503621331718146/drqBGY3Q.jpg', 
'Because living in Minnesota rules, we give back to our community with Surly Gives A Damn (SGAD). We contribute to the fine organizations that are making the North a better place to live through charitable donations, partnerships, and volunteer events. Our volunteers are a really active, passionate bunch and man do they give a damn.', 
'Mary Selke', 
'mary@surlybrewing.com', 
'',
'https://surlybrewing.com/surly-gives-a-damn/', 
'https://twitter.com/surlygivesadamn?lang=en', 
'',
'Minneapolis', 
'55414'), 
(
'House of Hope Presbyterian Church', 
'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT4iXM8E1rLI2GiPnBH1DJn8hEOWdfittXfe7uI3JygJz-1L-Ok', 
'At the core of House of Hope is a deeply embedded commitment to the greater community. We are dedicated to social justice and human rights, and are intentional citizens and good neighbors within the community.', 
'', 
'HOH@hohchurch.org', 
'(651) 227-6311',
'https://www.hohchurch.org/mission/get-involved/', 
'https://www.facebook.com/HouseofHopePresbyterian/', 
'797 Summit Avenue',
'Saint Paul', 
'55105'), 
(
'Sha’arim', 
'https://tcjewfolk.com/wp-content/uploads/2018/09/Shaarim.jpg', 
'Get more than you give. Our volunteers make the world a better place. Help us create a truly inclusive community just by being a friend. It’s that easy to change the lives of children and adults with special needs.', 
'Chana Shagalow', 
'info@shaarim.org', 
'(952) 303-5276',
'https://shaarim.org/shaarim/get-involved/volunteer/', 
'https://www.facebook.com/shaarimmn/', 
'2851 Hedberg Drive',
'Minnetonka', 
'55305'), 
(
'Council on Islamic Relations (CAIR) Minnesota', 
'https://media-exp1.licdn.com/dms/image/C560BAQHjo_Jz-MA4sw/company-logo_200_200/0?e=2159024400&v=beta&t=wBUL9QXIVMVuKPylUUDNBCG99I3DGAn4DXfpqH3kOYI', 
'CAIR-MN Mission: To enhance the understanding of Islam, encourage dialogue, protect civil liberties, empower American Muslims and build coalitions that promote justice and mutual understanding.', 
'contact', 
'info@mn.cair.com', 
'phone',
'https://www.cairmn.com/57-internships/391-volunteer-advocate-impact-join-the-wecair-team.html', 
'https://www.facebook.com/CAIR.Minnesota', 
'2511 East Franklin Avenue, #100',
'Minneapolis', 
'55406'),
(
'St. Stephen’s Minneapolis', 
'https://ststephensmpls.org/application/files/thumbnails/small/8215/7435/7962/Logo_Latest.png', 
'Our mission is ending homelessness. St. Stephen''s provides street outreach, shelter, and housing programs for people who are experiencing and emerging from homelessness in Hennepin County, Minnesota. St. Stephen''s provides street outreach, shelter, and housing programs for people who are experiencing homelessness. Each year our programs reach more than 5,000 children and adults.', 
'contact', 
'email', 
'612.874.0311',
'https://ststephensmpls.org/volunteer', 
'https://www.facebook.com/StStephensMpls/', 
'2309 Nicollet Avenue',
'Minneapolis', 
'55404'),
(
'Special Olympics Minnesota', 
'https://res.cloudinary.com/dktp1ybbx/image/upload/f_auto,fl_lossy,q_auto/v1550947259/organization/prod/57145/hVc6RqUhx4.jpg', 
'Through Special Olympics’ athletic, health and leadership programs, people with intellectual disabilities transform themselves, their communities and the world. We offer group opportunities for businesses, schools, civic groups, friends and family, etc. Volunteer groups report improved teamwork and enhanced relationships as a result of working with Special Olympics Minnesota athletes. By joining us, your organization can showcase your social responsibility, build brand awareness, and experience an array of team-building opportunities.', 
'contact', 
'info@somn.org', 
'612.333.0999',
'https://specialolympicsminnesota.org/get-involved/volunteers/', 
'https://www.facebook.com/SOMinnesota', 
'900 2nd Avenue South, Suite 300',
'Minneapolis', 
'55402'),
(
'Disabled American Veterans of Minnesota', 
'https://lh3.googleusercontent.com/proxy/KNkcuqckAvUUzbmdoJe7KFV12cyoJC6my_H8t9JUDPAHWo3MyW8rJ-cELFeDVjBRKHsqxPJBEfJ9_zDBN84o1HX681N-aEdIsfcHzsMQmn8HB4Rq5PFqXKrwcBkS49qaconCIFxT', 
'You can make a positive difference in the life of an American veteran who was disabled in our nation’s defense! The Disabled American Veterans’ Voluntary Services Program provides numerous opportunities for men and women of all ages to help make a difference in the lives of disabled veterans.', 
'contact', 
'email', 
'(651) 291-1212',
'https://davmn.org/volunteer/', 
'https://www.facebook.com/DAVofMN/', 
'20 12th Street West',
'Saint Paul', 
'55155'),
(
'First Covenant Church of Minneapolis', 
'https://www.handsontwincities.org/content/www.handsontwincities.org/agency/86814.jpg?1528320740?area=agency', 
'Since 2009, First Covenant has partnered with a shelter provider to offer shelter to 50 men and women experiencing homelessness. In the past, we offered shelter only during the winter months.  This year, we are beginning a partnership with St. Stephen''s and now will be offering shelter year round.  St. Stephen''s provides the staff, assigns the guests, and shares the cost of operations. First Covenant provides the space and volunteer coordination to provide and serve a hot meal nightly. We seek volunteers to provide these critical needs every day.', 
'Meg Barke', 
'mbarke@ststephensmpls.org', 
'612-332-8093',
'https://www.1stcov.org/shelter', 
'https://www.instagram.com/1stcovmpls/', 
'810 South 7th Street',
'Minneapolis', 
'55415');