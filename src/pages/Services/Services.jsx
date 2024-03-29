import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import Header from "../../components/Header/Header";
import Sidebar1 from "../../components/Sidebar1";
import Sidebar from "components/Sidebar/Sidebar";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>bank_app</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-row justify-center items-start w-full bg-gray-100">
        <Sidebar />
        <div className="flex flex-col items-center justify-start w-[83%] gap-[31px]">
          <Header className="flex justify-center items-center w-full pt-5 pb-[19px] px-5 border-gray-300 border-b border-solid bg-white-A700" />
          <div className="flex flex-col items-center justify-start w-[94%] gap-6">
            <div className="flex flex-row w-full gap-[30px]">
              <div className="flex flex-row justify-start items-center w-[32%] gap-[22px] p-[25px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px]">
                  <Img src="images/img_life_insurance_filled.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[52%] gap-2">
                  <Heading as="h1" className="!text-indigo-600_01">
                    Life Insurance
                  </Heading>
                  <Text as="p" className="!text-blue_gray-400">
                    Unlimited protection
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[32%] gap-[22px] p-[25px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px]">
                  <Img src="images/img_bag_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[44%] gap-1.5">
                  <Heading as="h2" className="!text-indigo-600_01">
                    Shopping
                  </Heading>
                  <Text as="p" className="!text-blue_gray-400">
                    Buy. Think. Grow.
                  </Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[32%] gap-[22px] p-[25px] bg-white-A700 rounded-[25px]">
                <Button size="4xl" className="w-[70px]">
                  <Img src="images/img_shield_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[45%] gap-1.5">
                  <Heading as="h3" className="!text-indigo-600_01">
                    Safety
                  </Heading>
                  <Text as="p" className="!text-blue_gray-400">
                    We are your allies
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[27px]">
              <Heading size="md" as="h4">
                Bank Services List
              </Heading>
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-row justify-between items-center w-full p-[15px] bg-white-A700 rounded-[20px]">
                  <div className="flex flex-row justify-start items-center w-[22%] gap-5">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_loan_1_indigo_600_01_60x60.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[67%] gap-[7px]">
                      <Text as="p" className="!font-medium">
                        Business loans
                      </Text>
                      <Text size="xs" as="p" className="!text-blue_gray-400">
                        It is a long established{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="h-[35px] w-[14%] mr-[15px] relative">
                    <Text
                      size="xs"
                      as="p"
                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-indigo-500 text-center !font-medium absolute"
                    >
                      View Details
                    </Text>
                    <div className="justify-center h-[35px] w-full left-0 bottom-0 right-0 top-0 m-auto border-indigo-500 border border-solid absolute rounded-[17px]" />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full p-[15px] bg-white-A700 rounded-[20px]">
                  <div className="flex flex-row justify-start items-center w-[22%] gap-5">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_briefcase_1.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[67%] gap-[5px]">
                      <Text as="p" className="!font-medium">
                        Checking accounts
                      </Text>
                      <Text size="xs" as="p" className="!text-blue_gray-400">
                        It is a long established{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="h-[35px] w-[14%] mr-[15px] relative">
                    <Text
                      size="xs"
                      as="p"
                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-indigo-500 text-center !font-medium absolute"
                    >
                      View Details
                    </Text>
                    <div className="justify-center h-[35px] w-full left-0 bottom-0 right-0 top-0 m-auto border-indigo-500 border border-solid absolute rounded-[17px]" />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full p-[15px] bg-white-A700 rounded-[20px]">
                  <div className="flex flex-row justify-start items-center w-[22%] gap-5">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_group_984.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[67%] gap-[5px]">
                      <Text as="p" className="!font-medium">
                        Savings accounts
                      </Text>
                      <Text size="xs" as="p" className="!text-blue_gray-400">
                        It is a long established{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="h-[35px] w-[14%] mr-[15px] relative">
                    <Text
                      size="xs"
                      as="p"
                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-indigo-500 text-center !font-medium absolute"
                    >
                      View Details
                    </Text>
                    <div className="justify-center h-[35px] w-full left-0 bottom-0 right-0 top-0 m-auto border-indigo-500 border border-solid absolute rounded-[17px]" />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full p-[15px] bg-white-A700 rounded-[20px]">
                  <div className="flex flex-row justify-start items-center w-[24%] gap-5">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_user_3_2.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[68%] gap-[7px]">
                      <Text as="p" className="!font-medium">
                        Debit and credit cards
                      </Text>
                      <Text size="xs" as="p" className="!text-blue_gray-400">
                        It is a long established{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="h-[35px] w-[14%] mr-[15px] relative">
                    <Text
                      size="xs"
                      as="p"
                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-indigo-500 text-center !font-medium absolute"
                    >
                      View Details
                    </Text>
                    <div className="justify-center h-[35px] w-full left-0 bottom-0 right-0 top-0 m-auto border-indigo-500 border border-solid absolute rounded-[17px]" />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full p-[15px] bg-white-A700 rounded-[20px]">
                  <div className="flex flex-row justify-start items-center w-[22%] gap-5">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_shield_1_indigo_600_01.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[67%] gap-[7px]">
                      <Text as="p" className="!font-medium">
                        Life Insurance
                      </Text>
                      <Text size="xs" as="p" className="!text-blue_gray-400">
                        It is a long established{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="h-[35px] w-[14%] mr-[15px] relative">
                    <Text
                      size="xs"
                      as="p"
                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-indigo-500 text-center !font-medium absolute"
                    >
                      View Details
                    </Text>
                    <div className="justify-center h-[35px] w-full left-0 bottom-0 right-0 top-0 m-auto border-indigo-500 border border-solid absolute rounded-[17px]" />
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full p-[15px] bg-white-A700 rounded-[20px]">
                  <div className="flex flex-row justify-start items-center w-[22%] gap-5">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_loan_1_indigo_600_01_60x60.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[67%] gap-[7px]">
                      <Text as="p" className="!font-medium">
                        Business loans
                      </Text>
                      <Text size="xs" as="p" className="!text-blue_gray-400">
                        It is a long established{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="xs" as="p" className="!text-blue_gray-400">
                      Many publishing
                    </Text>
                  </div>
                  <div className="h-[35px] w-[14%] mr-[15px] relative">
                    <Text
                      size="xs"
                      as="p"
                      className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto !text-indigo-500 text-center !font-medium absolute"
                    >
                      View Details
                    </Text>
                    <div className="justify-center h-[35px] w-full left-0 bottom-0 right-0 top-0 m-auto border-indigo-500 border border-solid absolute rounded-[17px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
