import { experience } from "@/data/profile";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-11">
      <h2 className="font-serif mb-4 text-[26px] font-normal tracking-tight text-foreground">
        Experience
      </h2>
      <Table>
        <TableBody>
          {experience.map((item) => (
            <TableRow
              key={`${item.org}-${item.date}`}
              className="border-border hover:bg-transparent"
            >
              <TableCell className="w-[140px] whitespace-nowrap py-3 pl-0 align-top text-sm font-bold text-foreground">
                {item.date}
              </TableCell>
              <TableCell className="py-3 pr-0 align-top">
                <p className="m-0 text-[15px] font-semibold text-foreground">
                  {item.role}
                  <span className="font-normal text-muted-foreground"> · {item.org}</span>
                </p>
                <p className="m-0 mt-1 text-[15px] leading-snug text-muted-foreground">
                  {item.detail}
                  {item.link && (
                    <>
                      {" "}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline underline-offset-2 hover:opacity-70"
                      >
                        View PR
                      </a>
                    </>
                  )}
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
