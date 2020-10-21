CREATE TABLE "brewery" (
	"breweryID" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "brewery_pk" PRIMARY KEY ("breweryID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "beers" (
	"beerID" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brewery" bigint NOT NULL,
	"rating" numeric NOT NULL,
	"note" TEXT NOT NULL,
	"bar" TEXT NOT NULL,
	CONSTRAINT "beers_pk" PRIMARY KEY ("beerID")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "beers" ADD CONSTRAINT "beers_fk0" FOREIGN KEY ("brewery") REFERENCES "brewery"("breweryID");

