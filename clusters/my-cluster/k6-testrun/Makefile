go:
	kubectl -n k6 delete testrun k6-testrun || true
	kustomize build | kubectl apply -f -
