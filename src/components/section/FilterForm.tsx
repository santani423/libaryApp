"Use client";
import { Card } from "../ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";

export default function FilterForm() {
  return (
    <Card className="w-full rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-4">
      <h2 className="text-sm font-bold mb-4">FILTER</h2>
      <h2 className="text-xxl font-bold mb-4">Category</h2>
      <FieldGroup className="w-full">
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox" name="terms-checkbox" />
          <Label htmlFor="terms-checkbox">Fiction</Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox-2" name="terms-checkbox-2" />
          <Label htmlFor="terms-checkbox-2">Non-Fiction</Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox-3" name="terms-checkbox-3" />
          <Label htmlFor="terms-checkbox-3">Science Fiction</Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox-4" name="terms-checkbox-4" />
          <Label htmlFor="terms-checkbox-4">Biography</Label>
        </Field>
      </FieldGroup>
    </Card>
  );
}
