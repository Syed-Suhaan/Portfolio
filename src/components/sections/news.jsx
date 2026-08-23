import { news } from "@/data/profile";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export default function NewsSection() {
  return (
    <section id="news" className="mb-11">
      <h2 className="font-serif mb-4 text-[26px] font-normal tracking-tight text-foreground">
        News
      </h2>
      <Table>
        <TableBody>
          {news.map((item) => (
            <TableRow key={`${item.date}-${item.event.slice(0, 24)}`} className="border-border hover:bg-transparent">
              <TableCell className="w-[120px] whitespace-nowrap py-3 pl-0 align-top text-sm font-bold text-foreground">
                {item.date}
              </TableCell>
              <TableCell className="py-3 pr-0 align-top text-[15px] text-muted-foreground">
                {item.event}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
