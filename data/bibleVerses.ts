/**
 * Bible Verses Data
 * Shared collection of faith-based financial wisdom verses
 * Used across HomePage, ReflectionPage, and InsightPage
 */

export interface Verse {
  verseText: string;
  verseReference: string;
}

export const BIBLE_VERSES: Verse[] = [
  { verseText: "Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine.", verseReference: "Proverbs 3:9-10" },
  { verseText: "Whoever can be trusted with very little can also be trusted with much.", verseReference: "Luke 16:10" },
  { verseText: "The wise store up choice food and olive oil, but fools gulp theirs down.", verseReference: "Proverbs 21:20" },
  { verseText: "Lazy hands make for poverty, but diligent hands bring wealth.", verseReference: "Proverbs 10:4" },
  { verseText: "All hard work brings a profit, but mere talk leads only to poverty.", verseReference: "Proverbs 14:23" },
  { verseText: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.", verseReference: "Colossians 3:23" },
  { verseText: "The rich rule over the poor, and the borrower is slave to the lender.", verseReference: "Proverbs 22:7" },
  { verseText: "The wicked borrow and do not repay, but the righteous give generously.", verseReference: "Psalm 37:21" },
  { verseText: "Remember this: Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously. Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.", verseReference: "2 Corinthians 9:6-7" },
  { verseText: "One person gives freely, yet gains even more; another withholds unduly, but comes to poverty. A generous person will prosper; whoever refreshes others will be refreshed.", verseReference: "Proverbs 11:24-25" },
  { verseText: "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.", verseReference: "Luke 6:38" },
  { verseText: "Dishonest money dwindles away, but whoever gathers money little by little makes it grow.", verseReference: "Proverbs 13:11" },
  { verseText: "Go to the ant, you sluggard; consider its ways and be wise! It has no commander, no overseer or ruler, yet it stores its provisions in summer and gathers its food at harvest.", verseReference: "Proverbs 6:6-8" },
  { verseText: "Put your outdoor work in order and get your fields ready; after that, build your house.", verseReference: "Proverbs 24:27" },
  { verseText: "For the love of money is a root of all kinds of evil.", verseReference: "1 Timothy 6:10" },
  { verseText: "No one can serve two masters. You cannot serve both God and money.", verseReference: "Matthew 6:24" },
  { verseText: "What good is it for someone to gain the whole world, yet forfeit their soul?", verseReference: "Mark 8:36" },
  { verseText: "I know what it is to be in need, and I know what it is to have plenty. I can do all this through him who gives me strength.", verseReference: "Philippians 4:12-13" },
  { verseText: "Keep your lives free from the love of money and be content with what you have.", verseReference: "Hebrews 13:5" },
  { verseText: "Honest scales and balances belong to the Lord; all the weights in the bag are of his making.", verseReference: "Proverbs 16:11" },
  { verseText: "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God", verseReference: "John 1:12" },
];

/**
 * Get a random verse from the collection
 */
export const getRandomVerse = (): Verse => {
  const randomIndex = Math.floor(Math.random() * BIBLE_VERSES.length);
  return BIBLE_VERSES[randomIndex];
};
