import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BarChart3, Cog, Cpu, LineChart } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <ArrowRight className="h-5 w-5 text-muted-foreground opacity-50" />
        </div>
        <CardTitle className="mt-4 text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

interface ServicesGridProps {
  services?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
}

const ServicesGrid = ({ services }: ServicesGridProps) => {
  const defaultServices = [
    {
      title: "Cost Transformation",
      description:
        "Identify inefficiencies, reduce operational costs, and maximize return on investment through strategic financial restructuring.",
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      title: "Technology Integration",
      description:
        "Leverage cutting-edge digital tools and platforms to enhance efficiency, automate processes, and drive business growth.",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      title: "Strategic Consulting",
      description:
        "Develop tailored solutions to address complex business challenges and position your organization for sustainable success.",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      title: "Process Optimization",
      description:
        "Streamline workflows, implement automation, and eliminate bottlenecks to improve operational performance and productivity.",
      icon: <Cog className="h-6 w-6" />,
    },
  ];

  const displayServices = services || defaultServices;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {displayServices.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;
