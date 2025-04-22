import { prisma } from "../../src/database.js";

const deleteTables = async () => {
  await prisma.categoriesPerUser.deleteMany();
  await prisma.personBadge.deleteMany();
  await prisma.badge.deleteMany();
  await prisma.category.deleteMany();
  await prisma.pocket.deleteMany();
  await prisma.user.deleteMany();
};

const createBadges = async () =>{
  return await prisma.badge.createMany({
    data: [
      {
        id: "badge_first_save",
        name: "First Deposit",
        description: "Congratulations on making your first saving!",
        icon: "icon_first_save.png",
      },
      {
        id: "badge_saving_streak",
        name: "Saving Streak",
        description: "Saved consistently for 7 days!",
        icon: "icon_saving_streak.png",
      },
      {
        id: "badge_gold_collector",
        name: "Gold Collector",
        description: "Saved a total of 1,000 gold coins.",
        icon: "icon_gold_collector.png",
      },
      {
        id: "badge_half_million",
        name: "Half Million Saver",
        description: "Saved up to 500,000 coins!",
        icon: "icon_half_million.png",
      },
      {
        id: "badge_millionaire",
        name: "Millionaire",
        description: "Saved a total of 1,000,000 coins!",
        icon: "icon_millionaire.png",
      },
      {
        id: "badge_consistent_saver",
        name: "Consistent Saver",
        description: "Saved at least once every week for 3 months!",
        icon: "icon_consistent_saver.png",
      },
      {
        id: "badge_big_saver",
        name: "Big Saver",
        description: "Saved more than 100,000 coins in one go!",
        icon: "icon_big_saver.png",
      },
      {
        id: "badge_investor",
        name: "Investor",
        description: "Invested your savings into assets!",
        icon: "icon_investor.png",
      },
      {
        id: "badge_saver_beginner",
        name: "Saver Beginner",
        description: "Saved 10 times!",
        icon: "icon_saver_beginner.png",
      },
      {
        id: "badge_saver_master",
        name: "Saver Master",
        description: "Saved 100 times!",
        icon: "icon_saver_master.png",
      },
    ],
  });
}

const disconnectDatabase = async () => {
  await prisma.$disconnect();
};

export { deleteTables, createBadges, disconnectDatabase };
