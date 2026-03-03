"Use client";
import { Card } from "../ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
 
import { Container, Star } from "lucide-react";

export default function RatingForm() {
  return (
    <Card className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-4">
      <h2 className="text-sm font-bold mb-4">Reating</h2> 
      <FieldGroup className="max-w-sm">
        <Field orientation="horizontal">
          <Checkbox id="rating-terms-checkbox" name="terms-checkbox" />
          <Label htmlFor="rating-terms-checkbox">
            <span className="mt-2 text-gray-600 font-bold flex items-center gap-1">
              <Star className="fill-yellow-500 text-yellow-500" /> 5
            </span>
          </Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="rating-terms-checkbox-2" name="terms-checkbox-2" />
          <Label htmlFor="rating-terms-checkbox-2">
            <span className="mt-2 text-gray-600 font-bold flex items-center gap-1">
              <Star className="fill-yellow-500 text-yellow-500" /> 4
            </span>
          </Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="rating-terms-checkbox-3" name="terms-checkbox-3" />
          <Label htmlFor="rating-terms-checkbox-3">
            <span className="mt-2 text-gray-600 font-bold flex items-center gap-1">
              <Star className="fill-yellow-500 text-yellow-500" /> 3
            </span>
          </Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="rating-terms-checkbox-4" name="terms-checkbox-4" />
          <Label htmlFor="rating-terms-checkbox-4">
            <span className="mt-2 text-gray-600 font-bold flex items-center gap-1">
              <Star className="fill-yellow-500 text-yellow-500" /> 2
            </span>
          </Label>
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="rating-terms-checkbox-4" name="terms-checkbox-4" />
          <Label htmlFor="rating-terms-checkbox-4">
            <span className="mt-2 text-gray-600 font-bold flex items-center gap-1">
              <Star className="fill-yellow-500 text-yellow-500" /> 1
            </span>
          </Label>
        </Field>

      </FieldGroup>
    </Card>
  );
}
