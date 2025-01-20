import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Search and Filter Section */}
      <motion.section
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold">Find Your Dream Job</h2>
        <div className="flex gap-4">
          <Input placeholder="Search jobs..." className="flex-1" />
          <Select>
            <option>Location</option>
            <option>Remote</option>
            <option>New York</option>
            <option>San Francisco</option>
          </Select>
          <Select>
            <option>Job Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </Select>
        </div>
      </motion.section>

      {/* Job Listings Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {[1, 2, 3, 4, 5, 6].map((job) => (
          <motion.div key={job} variants={fadeInUp}>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold">Job Title {job}</h3>
                <p className="text-muted-foreground">Company Name</p>
                <p className="text-muted-foreground">Location</p>
                <Button size="sm" className="mt-4" onClick={() => navigate(`/jobs/${job}`)}>
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* Company Profiles Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        <motion.div variants={fadeInUp} className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Companies
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Explore top companies hiring now.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {[1, 2, 3].map((company) => (
            <motion.div key={company} variants={fadeInUp}>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold">Company {company}</h3>
                  <p className="text-muted-foreground">Industry</p>
                  <Button size="sm" className="mt-4" onClick={() => navigate(`/companies/${company}`)}>
                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
