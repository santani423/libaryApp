import Template from "@/components/layout/template";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "@/components/section/BorrowedList/Profile";
import Borrowed from "@/components/section/BorrowedList/Borrowed";
import Reviews from "@/components/section/BorrowedList/Reviews";

export default function BorrowedList() {
  return (
    <Template>
      <div className="custom-container justify-center items-center md:px-28 bg-white pb-6 px-6 pt-3 md:px-28">
        <Tabs defaultValue="Profile" className="w-full">
          <TabsList>
            <TabsTrigger value="Profile">Profile</TabsTrigger>
            <TabsTrigger value="Borrowed">Borrowed</TabsTrigger>
            <TabsTrigger value="Reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="Profile">
            <Profile />
          </TabsContent>
          <TabsContent value="Borrowed">
            <Borrowed />
          </TabsContent>
          <TabsContent value="Reviews">
            <Reviews />
          </TabsContent>
        </Tabs>
      </div>
    </Template>
  );
}
