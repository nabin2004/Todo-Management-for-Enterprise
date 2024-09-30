import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Dummy Task Data
const tasks = [
  {
    status: false,
    taskId: "TASK001",
    description: "Finish project report",
    taskStatus: "In Progress",
    priority: "High",
  },
  {
    status: false,
    taskId: "TASK002",
    description: "Prepare slides for presentation",
    taskStatus: "Pending",
    priority: "Medium",
  },
  {
    status: false,
    taskId: "TASK003",
    description: "Organize team meeting",
    taskStatus: "Completed",
    priority: "Low",
  },
  {
    status: false,
    taskId: "TASK004",
    description: "Review code for the new feature",
    taskStatus: "In Progress",
    priority: "High",
  },
  {
    status: false,
    taskId: "TASK005",
    description: "Write unit tests for the API",
    taskStatus: "Pending",
    priority: "Medium",
  },
  {
    status: false,
    taskId: "TASK006",
    description: "Optimize database queries",
    taskStatus: "Completed",
    priority: "High",
  },
  {
    status: false,
    taskId: "TASK007",
    description: "Schedule performance review meeting",
    taskStatus: "Pending",
    priority: "Low",
  },
];

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Dark/Light Mode</Label>
        </div>
        <h1 className="text-4xl font-bold text-center">Welcome!</h1>
        <p className="text-center">Your ToDo Management App</p>
        <Button>Quit</Button>
      </div>

      <div className="w-full max-w-5xl">
        <Input type="text" placeholder="Filter tasks..." className="mb-4 w-full" />
        <Table className="w-full">
          <TableCaption>A list of your recent tasks.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead>Task ID</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.taskId}>
                <TableCell>
                  <Checkbox id={`task-${task.taskId}`} />
                </TableCell>
                <TableCell className="font-medium">{task.taskId}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.taskStatus}</TableCell>
                <TableCell className="text-right">{task.priority}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>
                <div className="flex justify-center mt-4">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          2
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
