CREATE TABLE "beers" (
	"beerID" serial NOT NULL,
	"name" TEXT NOT NULL,
	"brewery" TEXT NOT NULL,
	"rating" numeric NOT NULL,
	"note" TEXT NOT NULL,
	"bar" TEXT NOT NULL,
	CONSTRAINT "beers_pk" PRIMARY KEY ("beerID")
) WITH (
  OIDS=FALSE
);




