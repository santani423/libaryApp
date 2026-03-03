import Template from "@/components/layout/template";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BorrowedList from "@/components/section/Admin/BorrowdLIst";
import UserList from "@/components/section/Admin/UserList";
import Borrowed from "@/components/section/BorrowedList/Borrowed";
import Reviews from "@/components/section/BorrowedList/Reviews";

export default function ListUser() {
  return (
    <Template>
      <div className="custom-container justify-center items-center md:px-28 bg-white pb-6 px-6 pt-3 md:px-28">
        <Tabs defaultValue="borowdList" className="w-full">
          <TabsList>
            <TabsTrigger value="borowdList">Borrowd List</TabsTrigger>
            <TabsTrigger value="userList">User List</TabsTrigger>
            <TabsTrigger value="Reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="borowdList">
            <BorrowedList />
          </TabsContent>
          <TabsContent value="userList">
            <UserList />
          </TabsContent>
          <TabsContent value="Reviews">
            <Reviews />
          </TabsContent>
        </Tabs>
      </div>
    </Template>
  );
}
